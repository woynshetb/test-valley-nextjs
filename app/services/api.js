export async function fetchBanners() {
  const res = await fetch('https://api.testvalley.kr/main-banner/all')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
export async function fetchShortCut() {
  const res = await fetch('https://api.testvalley.kr/main-shortcut/all')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
export async function fetchCollectionsBySingleTypeAndViewTypeTile() {
  const res = await fetch('https://api.testvalley.kr/collections?prearrangedDiscount=SINGLE&viewType=TILE')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

