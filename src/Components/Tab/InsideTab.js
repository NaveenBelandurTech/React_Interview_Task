const InsideTab = ({data,clicked}) => {

  return (
  <section>
    <p  onClick={()=>clicked(data.title)}>{data.title}</p>
  </section>
  )
};

export default InsideTab;
