import ServiceCircle from "./ServiceCircle/ServiceCircle";
import photographyService from "../../../../assets/photography-service.jpg";
import videographyService from "../../../../assets/videography-service.jpg";
import livestreamService from "../../../../assets/livestream-service.jpg";
import scoreUpdateService from "../../../../assets/scoreupdate-service.jpg";
import replayService from "../../../../assets/replay-service.jpg";
import ledWallsService from "../../../../assets/ledwalls-service.jpg";
import soundsystemeservice from "../../../../assets/soundsystem-service.jpg";
import livesessionservice from "../../../../assets/livesession-service.jpg";
import equipmentservice from "../../../../assets/equipment-service.jpg";

export const PhotographyService = (props) => (
  <ServiceCircle
    image={photographyService}
    class={props.class}
    header="Photography"
    subtitle="Event Photography"
    description="We are responsible in photography in your event"
    node={props.final}
  />
);

export const VideographyService = (props) => (
  <ServiceCircle
    image={videographyService}
    class={props.class}
    header="Live Videography"
    subtitle="Event Live Viderography"
    description="We are responsible in photography in your event"
    node={props.final}
  />
);

export const LiveStreamingService = (props) => (
  <ServiceCircle
    image={livestreamService}
    class={props.class}
    header="Live Streaming"
    subtitle="Event LiveStreaming"
    description="We are responsible in photography in your event"
    node={props.final}
  />
);

export const ScoreUpdateService = (props) => (
  <ServiceCircle
    image={scoreUpdateService}
    class={props.class}
    header="Live Score Updating"
    subtitle="Event LiveStreaming"
    description="We are responsible in photography in your event"
    node={props.final}
  />
);

export const ReplayService = (props) => (
  <ServiceCircle
    image={replayService}
    class={props.class}
    header="Replay"
    subtitle="Event LiveStreaming"
    description="We are responsible in photography in your event"
    node={props.final}
  />
);

export const LedWallService = (props) => (
  <ServiceCircle
    image={ledWallsService}
    class={props.class}
    header="LED Walls"
    subtitle="Event LiveStreaming"
    description="We are responsible in photography in your event"
    node={props.final}
  />
);

export const SoundSystemService = (props) => (
  <ServiceCircle
    image={soundsystemeservice}
    class={props.class}
    header="Replay"
    subtitle="Event LiveStreaming"
    description="We are responsible in photography in your event"
    node={props.final}
  />
);

export const LiveSessionsService = (props) => (
  <ServiceCircle
    image={livesessionservice}
    class={props.class}
    header="Live Sessions"
    subtitle="Event LLive Sessions"
    description="We are responsible in photography in your event"
    node={props.final}
  />
);

export const EquipmentService = (props) => (
  <ServiceCircle
    image={equipmentservice}
    class={props.class}
    header="Equipment Service"
    subtitle="Event Equipments"
    description="We are responsible in photography in your event"
    node={props.final}
  />
);
