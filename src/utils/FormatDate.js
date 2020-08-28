const formatDate = (date) => {
  if (!date) return false

  date = new Date(date)

  let dia = (date.getUTCDate() < 10) ? `0${date.getUTCDate()}` : date.getUTCDate();
  let mes = ((date.getUTCMonth()+1) < 10) ? `0${date.getUTCMonth()+1}` : date.getUTCMonth()+1;
  let ano = date.getUTCFullYear();

  return `${dia}/${mes}/${ano}`;
}

export default formatDate