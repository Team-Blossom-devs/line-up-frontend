import { Title } from "@/components/Waiting/WaitingComponent"
import { useEffect, useState } from "react";
import { getWaiting } from "@/api/line/getWaiting";
import { getOrganDetail } from "@/api/organization/getOrganDetail";
import NotWaiting from "./NotWaiting";
import Waiting from "./Waiting";
import Pending from "./Pending";
import { useNavigate, useParams } from "react-router-dom";
import { WaitingType } from "@/types/Waiting.type";
import { Organization } from "@/types/Organization.type";

import { Header } from "@/components/Header/Header";


export const WaitingFunnel = () => {

  const [step, setStep] = useState<"PENDING" | "WAITING" | "NOT-WAITING">("NOT-WAITING");
  const id = useParams().id;
  const navigate = useNavigate();

  const [waitingInfo, setWaitingInfo] = useState<WaitingType>();
  const [organization, setOrganization] = useState<Organization>()

  useEffect(() => {

    const get = async () => {
      if (id) {
        const organInfo = await getOrganDetail(id);
        setOrganization(organInfo.data);
        const waitingInfo = await getWaiting(id);
        setWaitingInfo(waitingInfo);
        setStep(waitingInfo.waitingStatus);
      } else {
        navigate('/waitings')
      }
    }
    get();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, step])


  if (!id || !organization) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  else {
    return (
      <>
        <Header />
        <Title title={organization.name} className="text-center text-icon-color" />
        <div className="px-5 flex flex-col text-center">
          <>
            {id && step == "NOT-WAITING" && <NotWaiting
              id={id}
              imgUrl={organization.imageUrl}
              description={organization.introduce!}
              currentWaitingNumber={waitingInfo ? waitingInfo.currentWaitingNumber! : 0}
              time={waitingInfo ? waitingInfo.time : 0}
              onNext={() => { setStep("WAITING") }}
            />}
            {waitingInfo && step == "WAITING" && <Waiting
              id={id}
              imgUrl={organization.imageUrl}
              description={organization.introduce!}
              currentWaitingNumber={waitingInfo.currentWaitingNumber!}
              time={waitingInfo.time}
              headCount={waitingInfo.headCount!}
              onCancel={() => { setStep("NOT-WAITING") }}
            />}
            {waitingInfo && step == "PENDING" && <Pending
              id={id}
              imgUrl={waitingInfo.qrUrl!}
              time={waitingInfo.time}
            />}
          </>
        </div>
      </>
    )
  }
}