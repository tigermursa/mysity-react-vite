function Outta(out) {
  function Inna(ina) {
    console.log(out + ina);
  }

  return Inna;
}

const hereUgo = Outta(`My Name is`)

hereUgo("Tony")

