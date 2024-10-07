// components/ParcoursTimeline.tsx
"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaHospitalSymbol, FaTooth } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";

const ParcoursTimeline: React.FC = () => {
  return (
    <div className="bg-gray-600 text-white py-12 px-8 min-h-screen">
      <h2 className="text-center text-3xl font-bold mb-8">
        Parcours du docteur Younes DOUKANI
      </h2>
      <VerticalTimeline
      >
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#1e293b", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #1e293b" }}
          date="2012"
          iconStyle={{ background: "#4f46e5", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            Faculté de Médecine dentaire dAlger
          </h3>
          <p>Diplôme dÉtat de chirurgie dentaire</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          date="2014"
          contentStyle={{ background: "#1e293b", color: "#fff" }}
          iconStyle={{ background: "#fbbf24", color: "#fff" }}
          icon={<FaTooth />}
        >
          <h3 className="vertical-timeline-element-title">Allemagne</h3>
          <p>
            Séminaire en <span className="text-blue-500">implant dentaire</span>{" "}
            chez Sirona Implantology
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          date="2015-2016"
          contentStyle={{ background: "#1e293b", color: "#fff" }}
          iconStyle={{ background: "#4f46e5", color: "#fff" }}
          icon={<FaHospitalSymbol />}
        >
          <h3 className="vertical-timeline-element-title">
            Cabinets dentaires en Allemagne
          </h3>
          <p>Travaillé dans divers cabinets dentaires en Allemagne.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          date="2016"
          contentStyle={{ background: "#1e293b", color: "#fff" }}
          iconStyle={{ background: "#4f46e5", color: "#fff" }}
          icon={<GiHealthNormal />}
        >
          <h3 className="vertical-timeline-element-title">Roumanie</h3>
          <p>Formation en DSD (Digital Smile Design) motion & emotion</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          date="2017"
          contentStyle={{ background: "#1e293b", color: "#fff" }}
          iconStyle={{ background: "#4f46e5", color: "#fff" }}
          icon={<FaTooth />}
        >
          <h3 className="vertical-timeline-element-title">
            Leipzig - Allemagne
          </h3>
          <p>Formation en esthétique dentaire.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default ParcoursTimeline;
