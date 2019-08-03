import React from "react"
import { CardComponent } from "../CardComponent"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "./Education.scss"
import ImageDynamic from "../ImageDynamic"

export const Education = ({ educationData }) => {
  return (
    <section className="education  mt-5 ">
      <h2 className="mt-5 text-center">Education</h2>
      <div className="row">
       
        {educationData.map(({ education }) => {
          const { id, titleProfession, description, grade, school } = education
          return (
            <div key={id} className="col-sm-6  mb-3">
              <CardComponent className="card-ed">
                <div className="flex-title">
                  <div
                    className={`${
                      grade === `Master's Degree` ? "img-box3" : "img-box2"
                    }`}
                  >
                    {grade === `PHD` && (
                      <ImageDynamic filename="chevron4.png" />
                    )}
                    {grade === `Master's Degree` && (
                      <ImageDynamic filename="chevron3.png" />
                    )}
                    {grade === `Bachelor's Degree` && (
                      <ImageDynamic filename="chevron2.png" />
                    )}
                    {grade === `Diploma` && (
                      <ImageDynamic filename="chevron2.png" />
                    )}
                  </div>

                  <h5 className="card-title">{titleProfession}</h5>
                </div>
                <h6 className="card-subtitle ml-5 mt-1 mb-2 title-pos">
                  {grade} at {school}{" "}
                </h6>
                <span className="card-text">
                  {documentToReactComponents(description.json)}
                </span>
              </CardComponent>
            </div>
          )
        })}
      </div>
    </section>
  )
}
