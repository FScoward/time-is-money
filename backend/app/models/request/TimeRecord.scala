package models.request

import io.circe._, io.circe.generic.semiauto._
import java.time.ZonedDateTime

final case class TimeRecord(startTime: ZonedDateTime, endTime: ZonedDateTime)

object TimeRecord {
  implicit val timeRecordDecoder: Decoder[TimeRecord] = deriveDecoder[TimeRecord]
}
