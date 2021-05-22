/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router";
import ClientRecentHistory from "../../../Components/TalentComponents/ClientRecentHistory/ClientRecentHistory";
import JobDescriptionJobDetails from "../../../Components/TalentComponents/JobDescriptionJobDetails/JobDescriptionJobDetails";
import RightSidebarJobDetails from "../../../Components/TalentComponents/RightSidebarJobDetails/RightSidebarJobDetails";
import OtherOpenJobsByThisClient from "../../../Components/TalentComponents/OtherOpenJobsByThisClient/OtherOpenJobsByThisClient";
import SimilarJobsOnUpwork from "./../../../Components/TalentComponents/SimilarJobsOnUpwork/SimilarJobsOnUpwork";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";

export default function JobDetailsTalent() {
  const { id } = useParams();
  const [jobData, setJobData] = useState({})

  useEffect(() => {
    db.collection("job").doc(id).get().then(res => {
      setJobData(res.data())
    })
  }, [])

  const { t } = useTranslation();
  return (

    <div className="container-md container-fluid-sm my-lg-4 my-sm-4 py-xs-5">
      <div className="d-lg-block">
        <div className="row my-lg-4 px-0 mx-0 d-lg-block d-none py-xs-5">
          <h3>{t("Job details")}</h3>
        </div>
        <div className="row ">
          <JobDescriptionJobDetails job={jobData} />
          <RightSidebarJobDetails job={jobData} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-xs-12">
          <ClientRecentHistory />
          <OtherOpenJobsByThisClient />
          <SimilarJobsOnUpwork />
        </div>
      </div>
    </div>
  );
}
