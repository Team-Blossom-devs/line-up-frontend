import { Logo } from "@/components/Logo/Logo"
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

import dummyImg from "../../assets/images/주점_메뉴.jpg";


export const WaitingFunnel = () => {

  const [step, setStep] = useState<"PENDING" | "WAITING" | "NOT-WAITING">("NOT-WAITING");
  const id = useParams().id;
  const navigate = useNavigate();

  const [waitingInfo, setWaitingInfo] = useState<WaitingType>();
  const [organization, setOrganization] = useState<Organization>()

  useEffect(() => {

    const get = async () => {
      if (id) {
        const waitingInfo = await getWaiting(id);
        setWaitingInfo(waitingInfo);
        setStep(waitingInfo.waitingStatus);
        const organInfo = await getOrganDetail(id);
        setOrganization(organInfo.data);
      } else {
        navigate('/waitings')
      }
    }
    get();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, step])


  if (!id || !waitingInfo || !organization) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  else {
    return (
      <div className="flex flex-col items-center">
        <Logo />
        <Title title={organization.name} className="text-left" />
        <>
          {id && step == "NOT-WAITING" && <NotWaiting
            id={id}
            imgUrl={dummyImg}
            // imgUrl={organization.imgUrl}
            description={organization.introduce!}
            currentWaitingNumber={waitingInfo.currentWaitingNumber!}
            time={waitingInfo.time}
            onNext={() => { setStep("WAITING") }}
          />}
          {step == "WAITING" && <Waiting
            id={id}
            imgUrl={dummyImg}
            // imgUrl={organization.imgUrl}
            description={organization.introduce!}
            currentWaitingNumber={waitingInfo.currentWaitingNumber!}
            time={waitingInfo.time}
            headCount={waitingInfo.headCount!}
            onCancel={() => { setStep("NOT-WAITING") }}
          />}
          {step == "PENDING" && <Pending
            id={id}
            imgUrl={dummyImg}
            // imgUrl={organization.imgUrl}
            time={waitingInfo.time}
          />}
        </>
      </div>
    )
  }
}