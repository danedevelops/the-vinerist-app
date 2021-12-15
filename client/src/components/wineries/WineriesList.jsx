import WineryItem from "./WineryItem";
import LoadingAnimation from "../reusable/LoadingAnimation";

export default function WineriesList({ wineriesState }) {
  return wineriesState === null ? (
    <LoadingAnimation className="loading__animation" />
  ) : (
    <ul className="wineries__list">
      {wineriesState &&
        wineriesState.map((wineriesList) => {
          return (
            <WineryItem key={wineriesList.id} wineriesData={wineriesList} />
          );
        })}
    </ul>
  );
}
