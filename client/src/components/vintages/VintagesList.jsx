import VintagesItemList from "./VintagesItemList";
import Chevron from "../../assets/icons/GroupBlack.svg";

export default function VintagesList({ vintagesState }) {
  return vintagesState === null ? (
    <h2>Loading</h2>
  ) : (
    <ul className="vintages__list">
      {vintagesState &&
        vintagesState.map((vintagesItemList) => {
          return (
            <VintagesItemList
              key={vintagesItemList.id}
              data={vintagesItemList}
              wineryFlag={"y"}
            />
          );
        })}
      <p className="vintages__load">Load More Vintages</p>
      <img className="vintages__chevron" src={Chevron} />
    </ul>
  );
}
