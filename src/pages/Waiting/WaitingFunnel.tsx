import { Logo } from "@/components/Logo/Logo"
import { Title } from "@/components/Waiting/WaitingComponent"
import { useEffect, useState } from "react";
// import { getWaiting } from "@/api/line/getWaiting";
// import { getOrganDetail } from "@/api/organization/getOrganDetail";
import NotWaiting from "./NotWaiting";
import Waiting from "./Waiting";
import Pending from "./Pending";
import { useNavigate, useParams } from "react-router-dom";

export const WaitingFunnel = () => {

  const [step, setStep] = useState<"PENDING" | "WAITING" | "NOT-WAITING">("NOT-WAITING");
  const id = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {

    const get = async () => {
      if (id) {
        // const waitingInfo = await getWaiting(id);
        // const organInfo = await getOrganDetail(id);
      } else {
        navigate('/waitings')
      }
    }
    get();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <div className="flex flex-col items-center">
      <Logo />
      <Title title="title" className="text-left" />
      <>
        {step == "NOT-WAITING" && <NotWaiting
          id={"1"}
          imgUrl=""
          description=""
          currentWaitingNumber={0}
          time={600}
          onNext={() => { setStep("WAITING") }}
        />}
        {step == "WAITING" && <Waiting
          id={"1"}
          imgUrl=""
          description=""
          currentWaitingNumber={0}
          time={600}
          headCount={6}
          onCancel={() => { setStep("NOT-WAITING") }}
        />}
        {step == "PENDING" && <Pending
          id={"1"}
          imgUrl=""
          time={600}
        />}
      </>
    </div>
  )
}
