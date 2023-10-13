import './Quotes.scss';

type QuotesProps = {
  citation: string;
};

function Quotes({ citation }: QuotesProps) {
  return (
    <div className="quotes">
      <img
        className="interpreter"
        src="../../../assets/img/interprete.png"
        alt="interprete"
      />
      <p className="quote">{citation}</p>
    </div>
  );
}

export default Quotes;
