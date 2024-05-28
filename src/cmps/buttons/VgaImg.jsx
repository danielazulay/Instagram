import { SvgService } from "../../services/svg.service";


export function VgaImg({type}) {


  return (
    <div
    className="instagran-logo"
    dangerouslySetInnerHTML={{
      __html: SvgService.getSvg(type),
    }}
  />
  );
}
