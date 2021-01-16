package controllers

import org.scalatestplus.play.PlaySpec
import org.scalatestplus.play.guice.GuiceOneAppPerTest
import play.api.libs.json.Json
import play.api.test.Helpers._
import play.api.test.{FakeRequest, Injecting}

class TaskStoreControllerSpec extends PlaySpec with GuiceOneAppPerTest with Injecting {
  "TaskStoreController POST" should {
    "return json" in {
      val controller = new TaskStoreController(stubControllerComponents())
      val eventualResult = controller.index().apply(FakeRequest(POST, "/task"))

      status(eventualResult) mustBe OK
      contentType(eventualResult) mustBe Some("application/json")
      contentAsJson(eventualResult) mustBe Json.toJson("{}")
    }
  }
}
