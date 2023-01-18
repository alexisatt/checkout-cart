export default function Item({ item }) {
  if (item.bundleType === "Bra Bundle") {
    return (
        <ul>
            <li><h2>Add more bra items to complete the bundle!</h2></li>
        <li>
          <pre>
            <code>{JSON.stringify(item.bundleType)}</code>
          </pre>
        </li>
        <li>
          {" "}
          <pre>
            <code>{JSON.stringify(item.title)}</code>
          </pre>
        </li>
        <li>
          <pre>
            <code>{JSON.stringify(item.price)}</code>
          </pre>
        </li>
        <li>
          <pre>
            <code>{JSON.stringify(item.quantity)}</code>
          </pre>
        </li>
        <li>
          <pre>
            <code>{JSON.stringify(item.product_type)}</code>
          </pre>
        </li>
      </ul>
    );
  }

  if (item.bundleType === "Underwear Bundle") {
    return (
        <ul>
             <li><h2>Add more Underwear items to complete the bundle!</h2></li>
        <li>
          <pre>
            <code>{JSON.stringify(item.bundleType)}</code>
          </pre>
        </li>
        <li>
          {" "}
          <pre>
            <code>{JSON.stringify(item.title)}</code>
          </pre>
        </li>
        <li>
          <pre>
            <code>{JSON.stringify(item.price)}</code>
          </pre>
        </li>
        <li>
          <pre>
            <code>{JSON.stringify(item.quantity)}</code>
          </pre>
        </li>
        <li>
          <pre>
            <code>{JSON.stringify(item.product_type)}</code>
          </pre>
        </li>
      </ul>
    );
  }

  

  return <h1>no items</h1>;
}
