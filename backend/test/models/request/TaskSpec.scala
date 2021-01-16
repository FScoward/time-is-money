package models.request

import io.circe.parser._
import org.scalatest.funspec.AnyFunSpec

import java.time.ZonedDateTime

class TaskSpec extends AnyFunSpec {
  describe("request json") {
    it("parse") {
      val taskName = "taskの名前"
      val startTimeStr = "2021-01-11T10:00:00+09:00"
      val endTimeStr = "2021-01-11T10:00:00+09:00"
      val timeRecord = TimeRecord(
        ZonedDateTime.parse(startTimeStr),
        ZonedDateTime.parse(endTimeStr)
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
        |      "startTime" : "$startTimeStr",
        |      "endTime" : "$endTimeStr"
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
