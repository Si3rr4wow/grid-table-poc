import styled from "styled-components";

const TableRow = styled.li`
  display: grid;
  margin-bottom: 12px;
  grid-gap: 12px 8px;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "image title"
    "image price"
    "image quantity";

  @media screen and (min-width: 768px) {
    grid-template-columns: 80px 80px 1fr 80px 80px;
    grid-template-rows: 1fr;
    grid-template-areas: "quantity image title unit-price price";
  }
`;

const TableHeader = styled.div`
  display: grid;
  grid-gap: 12px 8px;
  grid-template-columns: 80px 80px 1fr 80px 80px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.a`
  grid-area: title;
`;
const Price = styled.div`
  grid-area: price;
`;
const UnitPrice = styled.div`
  grid-area: unit-price;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Quantity = styled.div`
  grid-area: quantity;
`;
const Image = styled.img`
  grid-area: image;
`;

const Row = () => (
  <TableRow aria-label="2 Goodfella's Stonebaked Thin Margherita 345G for £2000">
    <Image aria-hidden src="https://picsum.photos/80" />
    <Title aria-label="Goodfella's Stonebaked Thin Margherita 345G" href="#">
      Goodfella's Stonebaked Thin Margherita 345G
    </Title>
    <Price aria-hidden>£2000</Price>
    <UnitPrice aria-hidden>£1000</UnitPrice>
    <Quantity aria-hidden>2</Quantity>
  </TableRow>
);

function App() {
  return (
    <div>
      <h2>Basket</h2>
      <h3>Fridge</h3>
      <TableHeader aria-hidden>
        <div>Quantity</div>
        <div>Product</div>
        <div></div>
        <div>Unit Price</div>
        <div>Total</div>
      </TableHeader>
      <ul>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </ul>
    </div>
  );
}

export default App;
