import React from "react";
import { useParams } from "react-router-dom";
import Contact from "../components/Contact";
import DeclareForm from "../components/DeclareForm";
import EventList from "../components/EventList";

export default function DeclarePage() {
  const { eventId } = useParams();
  return (
    <>
      {eventId === undefined ? <EventList /> : <DeclareForm />}
      <Contact />
    </>
  );
}
