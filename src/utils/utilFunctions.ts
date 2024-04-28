

export const formatMount = (amount: number) => {
  return new Intl.NumberFormat("es-CL").format(amount);
}
