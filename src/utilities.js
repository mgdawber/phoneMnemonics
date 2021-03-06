export const sanitize = (phoneNumber) => (
  phoneNumber.replaceAll('0', '').replaceAll('1', '')
)
