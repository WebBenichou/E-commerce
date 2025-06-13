export default function ProgressBar(props) {
    return (
        <div className="row">
            <div className="col">
                <input type="range" id="volume" name="volume" min="0" max="100" />
                <label htmlFor="volume">Progression : {props.value}%</label>
            </div>
            <div className="col">
                <input type="time" id="appt" name="appt" min="09h:00min" max="18h:00min" required />
            </div>
        </div>

    )
}