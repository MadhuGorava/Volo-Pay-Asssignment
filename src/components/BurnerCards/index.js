import {ImFire} from 'react-icons/im'
import {
  ListContainer,
  NameContainer,
  BgContainer,
  Line,
  CardType,
  ExpiryDate,
  NameRole,
  Name,
  RedIcon,
  GreenIcon,
  CurrencyData,
} from './styledComponents'

const BurnerCards = props => {
  const {burnerCardList} = props
  const {
    name,
    holderName,
    budgetName,
    spent,
    availableToSpend,
    cardType,
    expiry,
  } = burnerCardList
  return (
    <ListContainer>
      <BgContainer>
        <NameContainer>
          <Name>{name}</Name>
          <NameRole>
            {holderName} . <NameRole>{budgetName}</NameRole>
          </NameRole>
        </NameContainer>
        <ImFire />
      </BgContainer>
      <BgContainer>
        <CardType>{cardType}</CardType>
        <ExpiryDate>{expiry}</ExpiryDate>
      </BgContainer>
      <Line />
      <BgContainer>
        <RedIcon>
          . <CurrencyData>Spent</CurrencyData>
        </RedIcon>
        <CurrencyData>
          {spent.value} <CurrencyData>{spent.currency}</CurrencyData>
        </CurrencyData>
      </BgContainer>
      <BgContainer>
        <GreenIcon>
          . <CurrencyData>Available to spend</CurrencyData>
        </GreenIcon>
        <CurrencyData>
          {availableToSpend.value}{' '}
          <CurrencyData>{availableToSpend.currency}</CurrencyData>
        </CurrencyData>
      </BgContainer>
    </ListContainer>
  )
}

export default BurnerCards
