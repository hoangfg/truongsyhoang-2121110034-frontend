import { Link } from "react-router-dom";
export default function Paginate(props) {
  var totalPage = props.totalPage;
  var currentPage = parseInt(props.currentPage);
  var basePath = props.basePath;
  var allLi = [];
  if (currentPage !== 1)
    allLi.push(
      <li>
        <Link to={basePath + 1}>First</Link>
      </li>
    );
  if (currentPage > 1)
    allLi.push(
      <li>
        <Link to={basePath + (currentPage - 1)}>Previous</Link>
      </li>
    );
  for (let i = currentPage - 5; i <= currentPage - 1; i++) {
    if (i >= 1)
      allLi.push(
        <li>
          <Link to={basePath + i}>{i}</Link>
        </li>
      );
  }
  allLi.push(
    <li>
      <Link style={{ color: "red" }} to={basePath + currentPage}>
        {currentPage}
      </Link>
    </li>
  );
  for (let i = 1 + currentPage; i <= currentPage + 5; i++) {
    if (i <= totalPage)
      allLi.push(
        <li>
          <Link to={basePath + i}>{i}</Link>
        </li>
      );
  }
  if (currentPage < totalPage)
    allLi.push(
      <li>
        <Link to={basePath + (currentPage + 1)}>Next</Link>
      </li>
    );
  if (currentPage != totalPage)
    allLi.push(
      <li>
        <Link to={basePath + totalPage}>Last</Link>
      </li>
    );
  return (
    <div className="pagination pagination-centered">
      <ul>{allLi}</ul>
    </div>
  );
}
