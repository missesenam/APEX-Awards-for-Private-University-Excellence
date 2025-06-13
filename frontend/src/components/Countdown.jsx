export default function Countdown() {
  return (
    <div className="text-center py-8">
      <h2 className="text-2xl font-bold mb-4">Awards Ceremony Countdown</h2>
      <div className="flex justify-center gap-4">
        <div className="flex flex-col items-center">
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": 30 }}></span>
          </span>
          days
        </div>
        <div className="flex flex-col items-center">
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": 10 }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col items-center">
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": 24 }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col items-center">
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": 45 }}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
}
