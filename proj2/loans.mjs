
export const simpleInterest = (p,t,r) => (p*t*r)/100;

const repayAmount = (p,t,r) => p+simpleInterest(p,t,r);

export default repayAmount;