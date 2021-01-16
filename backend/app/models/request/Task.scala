package models.request

import io.circe._, io.circe.generic.semiauto._

case class Task(name: String, records: Seq[TimeRecord])

object Task {
  implicit val taskDecoder: Decoder[Task] = deriveDecoder[Task]
}
