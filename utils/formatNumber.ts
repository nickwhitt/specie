export default function (value: number | null) {
  if (value === null || isNaN(value)) {
    return '-'
  }

  let options = {}
  if (value >= 100000) {
    options = { notation: "compact", maximumSignificantDigits: 4 }
  }

  return Intl.NumberFormat("en-US", options).format(value)
}
