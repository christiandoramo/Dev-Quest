const link = "https://deckofcardsapi.com/api/deck/";

async function draw10Cards() {
  const linkDeck = link.concat(`new/shuffle/?deck_count=${1}`);
  const deckResp = await fetch(linkDeck);
  const deckData = await deckResp.json();
  const deckid = deckData.deck_id;
  const linkDraw = link.concat(`${deckid}/draw/?count=${10}`);
  const deckDrawResp = await fetch(linkDraw);
  const deckDrawData = await deckDrawResp.json();
  const cards = deckDrawData.cards;
  return cards;
}

export default draw10Cards;
