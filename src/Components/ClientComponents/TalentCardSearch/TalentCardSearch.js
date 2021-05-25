/* eslint-disable */
import React from 'react'
import { useTranslation } from "react-i18next";

import ImgWithActiveStatus from "./../../../Components/ClientComponents/ImgWithActiveStatus/ImgWithActiveStatus";


export default function TalentCardSearch() {
    const { t } = useTranslation();

  return (
    <div>
      <div className="row border bg-white border-1">
        <div className="col-1 pt-lg-3">
          <ImgWithActiveStatus />
        </div>
        <div className="col-lg-6 pt-lg-3 ">
          <a
            href
            id="job-title-home-page "
            className="link-dark job-title-hover "
          >
            <p className="fw-bold text-success">Anva D.</p>
          </a>
          <a href id="job-title-home-page " className="link-dark">
            <p className="fw-bold ">Youtube Thumbnail designer</p>
          </a>
          <span className="text-muted">Poland</span>
          <div className="row py-3">
            <div className="col">
              <span className="fw-bold">$30.00</span>
              <span className="text-muted"> /hr</span>
            </div>
            <div className="col">
              <span className="fw-bold">$30</span> +{" "}
              <span className="text-muted"> earned</span>
            </div>
            <div className="col">
                <span>
                  {" "}
                  <svg
                    width="15px"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                    aria-hidden="true"
                    role="img"
                  >
                    <polygon
                      points="7 0 0 0 0 9.21 7 14 14 9.21 14 0 7 0"
                      fill="#1caf9d"
                    />
                  </svg>
                </span>
                <span className="text-primary"> {t("RISING TALENT")}</span>
              </div>
          </div>
        </div>
        <div className="col py-3">
          <div className="btn-group float-end ">
            <button
              type="button"
              className="btn btn-light dropdown-toggle border border-1 rounded-circle collapsed"
              data-toggle="collapse"
              data-target="#collapse"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <i
                className="far fa-thumbs-up"
                aria-hidden="true"
                onclick="this.classList.toggle('fas')"
              />
            </button>
          </div>
          <div className="btn-group float-start">
            <button
              type="button"
              className="btn btn-light dropdown-toggle border border-1 rounded-circle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="far fa-thumbs-down" />
            </button>
            <ul className="dropdown-menu ">
              <li>
                <a className="dropdown-item" href="#">
                  Candidate will not be notified
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col py-3">
          <button type="button" className="btn bg-white btn-outline-secondary">
            <span className="text-success fw-bold">Messages</span>
          </button>
        </div>
        <div className="col py-3">
          <button type="button" className="btn bg-upwork px-5">
            Hire
          </button>
        </div>

        <div className="col-lg-1 pt-lg-3"></div>
        <div className="col-lg-10 pt-lg-3 mx-3">
          <p className="text-muted">
            <span>
              <i className="fas fa-star" /> Specialized in
            </span>
            <span> Graphic Design</span>
          </p>
          <p id="Cover-Letter">
            <span className="fw-bold">Cover Letter - </span>
            Hi, I like how you described what you're looking for - it seems to
            be an exciting project! What's your main goal? Do you have any extra
            wishes? Best wishes, Anna Dembov P.S. https://behance.net/annadembov
            https://www.linkedin.com/in<span id="dots">...</span>
            <span id="more">
              /anna-dembov-91a32b1b3
            </span>
          </p>
        </div>
      </div>

    </div>
  )
}