package models.request

import org.scalatest.funspec.AnyFunSpec
import io.circe._, io.circe.generic.auto._, io.circe.parser._, io.circe.syntax._
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.time.ZonedDateTime

class TaskSpec extends AnyFunSpec {
  describe("request json") {
    it("parse") {
      val taskName = "taskの名前"
      val timeRecord = TimeRecord(
        ZonedDateTime.parse("2021-01-11T10:00:00+09:00"),
        ZonedDateTime.parse("2021-01-11T10:00:00+09:00")
      )
      val task = Task(
        name = taskName,
        records = Seq(
          timeRecord
        )
      )

      val requestJson =
        s"""
        |{
        |  "name" : "taskの名前",
        |  "records" : [
        |    {
        |      "startTime" : "2021-01-11T10:00:00+09:00",
        |      "endTime" : "2021-01-11T10:00:00+09:00"
        |    }
        |  ]
            |}""".stripMargin
      val expected = Right(
        task
      )

      val actual = decode[Task](requestJson)

      assert(actual.isRight)
      assert(expected == actual)
    }
  }
}
