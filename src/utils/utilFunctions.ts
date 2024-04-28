

export const formatAmount = (amount: number) => {
  return new Intl.NumberFormat("es-CL").format(amount);
}

export const formatDate = (date: string | Date) => {
  return new Date(date).toLocaleDateString()
}
