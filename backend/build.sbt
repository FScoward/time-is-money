name := """backend"""
organization := "com.fscoward"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.13.3"

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "5.0.0" % Test
libraryDependencies += "org.scalatest" %% "scalatest-funspec" % "3.2.2" % "test"

// Adds additional packages into Twirl
//TwirlKeys.templateImports += "com.fscoward.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "com.fscoward.binders._"

/** eff --> */
// check maven badge above for latest version
libraryDependencies += "org.atnos" %% "eff" % "5.13.0"

// to write types like Reader[String, *]
addCompilerPlugin("org.typelevel" %% "kind-projector" % "0.11.2" cross CrossVersion.full)

// to get types like Reader[String, *] (with more than one type parameter) correctly inferred for scala 2.12.x
// scalacOptions += "-Ypartial-unification"
/** <-- eff */

/** refined --> */
libraryDependencies ++= Seq(
  "eu.timepit" %% "refined" % "0.9.20",
  "eu.timepit" %% "refined-cats" % "0.9.20", // optional
  "eu.timepit" %% "refined-eval" % "0.9.20", // optional, JVM-only
  "eu.timepit" %% "refined-jsonpath" % "0.9.20", // optional, JVM-only
  "eu.timepit" %% "refined-pureconfig" % "0.9.20", // optional, JVM-only
  "eu.timepit" %% "refined-scalacheck" % "0.9.20", // optional
  "eu.timepit" %% "refined-scalaz" % "0.9.20", // optional
  "eu.timepit" %% "refined-scodec" % "0.9.20", // optional
  "eu.timepit" %% "refined-scopt" % "0.9.20", // optional
  "eu.timepit" %% "refined-shapeless" % "0.9.20" // optional
)

libraryDependencies += "io.estatico" %% "newtype" % "0.4.4"

scalacOptions += "-Ymacro-annotations"

/** <--- refined */

/** circe --> */
val circeVersion = "0.12.3"

libraryDependencies ++= Seq(
  "io.circe" %% "circe-core",
  "io.circe" %% "circe-generic",
  "io.circe" %% "circe-parser"
).map(_ % circeVersion)
libraryDependencies += "io.circe" %% "circe-core" % "0.13.0"

/** <-- circe */
