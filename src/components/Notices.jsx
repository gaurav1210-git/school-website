import { events, notices } from "../data/school";
import SectionHeading from "./SectionHeading";

export default function Notices() {
  return (
    <section className="section alt" id="notices">
      <div className="container notice-grid">
        <div>
          <SectionHeading eyebrow="Notice Board" title="Latest updates" text="Important announcements and school information." />
          <div className="notice-list">
            {notices.map(n => <div className="notice" key={n.title}><span>{n.date}</span><div><b>{n.type}</b><h3>{n.title}</h3></div></div>)}
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="Upcoming" title="Events" text="Keep up with what is happening around campus." />
          <div className="event-list">
            {events.map(e => <div className="event" key={e.title}><div className="event-date"><strong>{e.date}</strong><span>{e.month}</span></div><div><h3>{e.title}</h3><p>{e.text}</p></div></div>)}
          </div> 
        </div>
      </div>
    </section>
  );
}
