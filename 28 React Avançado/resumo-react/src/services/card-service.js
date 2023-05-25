const link = "https://deckofcardsapi.com/api/deck/";

async function drawCards() {
  const linkDeck = link.concat(`new/shuffle/?deck_count=1`);
  const deckResp = await fetch(linkDeck);
  const deckData = await deckResp.json();
  const deckid = deckData.deck_id;
  const linkDraw = link.concat(`${deckid}/draw/?count=2`);
  const deckDrawResp = await fetch(linkDraw);
  const deckDrawData = await deckDrawResp.json();
  const cards = deckDrawData.cards;
  console.log(cards);
  return cards;
}

export default drawCards;
