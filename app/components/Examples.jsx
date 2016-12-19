var React = require("react");
var {Link} = require("react-router");

var Examples = (props) => {
    return (
      <div>
        <h1 className="text-center  page-title"> Examples</h1>
        <p>Here are a few example location to try out </p>
        <ol>
          <li>
            <Link to='/?location=Kansas City'>Kansas Citym MO</Link>
          </li>
          <li>
            <Link to='/?location=Kingston'>Kingston, JM</Link>
          </li>
          <li>
            <Link to='/?location=Tampa'>Tampa, FL</Link>
          </li>
        </ol>
      </div>
    );
  }

module.exports = Examples;
