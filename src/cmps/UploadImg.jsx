import { SvgService } from "../services/svg.service";

export function UploadImg({ changePage, url, handleChange }) {
  function onSubmit(event) {
    event.preventDefault();
    changePage();
  }

  return (
    <div className="form-upload">
      <div
        className="icon-upload"
        dangerouslySetInnerHTML={{
          __html: SvgService.getSvg("upload"),
        }}
      />
      <h3>Drag photos and videos here</h3>

      <form onSubmit={onSubmit}>
        <input
          className="input-upload"
          type="text"
          placeholder="Link"
          onChange={handleChange}
          value={url}
        ></input>
        <button className="button-upload" type="submit">
          upload
        </button>
      </form>
    </div>
  );
}
