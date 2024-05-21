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
import { deleteWaiting } from "@/api/line/deleteWaiting";


export const WaitingFunnel = () => {

  const [step, setStep] = useState<"PENDING" | "WAITING" | "NOT-WAITING" | "EXPIRED" | "NOT-FOUND">("NOT-WAITING");
  const id = useParams().id;
  const navigate = useNavigate();

  const [waitingInfo, setWaitingInfo] = useState<WaitingType>();
  const [organization, setOrganization] = useState<Organization>()

  useEffect(() => {

    const get = async () => {
      if (id && !isNaN(parseInt(id))) {
        const organInfo = await getOrganDetail(id);
        setOrganization(organInfo.data);
        const waitingInfo = await getWaiting(id);
        setWaitingInfo(waitingInfo);
        setStep(waitingInfo.waitingStatus);

        if (waitingInfo.waitingStatus === "EXPIRED") {
          console.log('expired', waitingInfo.waitingId);
          alert(waitingInfo.qrUrl);
          await deleteWaiting(waitingInfo.waitingId!);
          window.location.reload();
        } else if (waitingInfo.waitingStatus === "NOT-FOUND") {
          alert(waitingInfo.qrUrl);
          console.log(waitingInfo.waitingStatus);
          navigate('/viewAll', { replace: true });
        }

      } else {
        navigate('/viewAll', { replace: true })
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
              location={organization.location}
              table={organization.tableCount}
              openTime={organization.openTime}
              closeTime={organization.closeTime}
              onNext={() => { setStep("WAITING") }}
            />}
            {waitingInfo && step == "WAITING" && <Waiting
              id={waitingInfo.waitingId!}
              imgUrl={organization.imageUrl}
              description={organization.introduce!}
              currentWaitingNumber={waitingInfo.currentWaitingNumber!}
              time={waitingInfo.time}
              location={organization.location}
              table={organization.tableCount}
              openTime={organization.openTime}
              closeTime={organization.closeTime}
              headCount={waitingInfo.headCount!}
              onCancel={() => { setStep("NOT-WAITING") }}
            />}
            {waitingInfo && step == "PENDING" && <Pending
              id={waitingInfo.waitingId!}
              imgUrl={waitingInfo.qrUrl!}
              time={waitingInfo.time}
            />}
          </>
        </div>
      </>
    )
  }
}