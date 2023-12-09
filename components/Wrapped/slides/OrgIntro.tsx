import $ from "@/utils/theme";
import type { SlideProps, SlideOptions } from "../internals/slidesHelper";
import { USDollarNoCents } from "../utils/formatter";
import Background from "../components/Background";

export default function OrgIntro({ data }: SlideProps) {
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        paddingBottom: "80px",
        color: "white",
        textAlign: "center"
    }}>
      {Object.keys(data.organizations)
      .filter((org) => data.organizations[org].spent > 0)
      .filter(
        (org) =>
          data.organizations[org].spendingByUser[data.individual.id]
      ).length > 3 ? <><h1 {...$.title({animation: "fadeIn 1s"})}>This year, you've been working on a lot of projects, {Object.keys(data.organizations).length} to be exact.</h1>
      <h2 {...$.headline({ marginBottom: $.s3, marginTop: $.s3, fontWeight: 400, width: '80%', animation: "fadeIn 2s" })}>
        Let's take a look back at the three that meant the most.
      </h2></> : <><h1 {...$.title({animation: "fadeIn 1s"})}>You've been busy on HCB this year.</h1>
      <h2 {...$.headline({ marginBottom: $.s3, marginTop: $.s3, fontWeight: 400, width: '80%', animation: "fadeIn 2s" })}>
        Let's take a look back at the projects you worked on.
      </h2></> }
      
      <Background />
    </div>
  );
}

OrgIntro.config = {
  bg: $.blue,
  duration: 3000
  
} satisfies SlideOptions;
