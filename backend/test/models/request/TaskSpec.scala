package models.request

import org.scalatest.funspec.AnyFunSpec
import io.circe._, io.circe.generic.auto._, io.circe.parser._, io.circe.syntax._

class TaskSpec extends AnyFunSpec {
  describe("request json") {
    it("parse") {
      val taskName = "taskの名前"
      val requestJson =
        s"""
        {
          "name": "${taskName}"
        }
        """
      val expected = Task(taskName)
      val actual = decode[Task](requestJson)

      assert(actual.isRight)
      assert(Right(expected) == actual)
    }
  }
}
