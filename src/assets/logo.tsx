export const NavLogo = ({ footer: footer }: { footer?: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" height="50" width="250">
    <text
      y="40"
      fontFamily="Poppins"
      fontSize="40"
      fontWeight="bold"
      fill={`${footer ? "#FFFFFF" : "#34313D"}`}
    >
      ACM
    </text>
    <text
      fontWeight={100}
      x="105"
      y="35"
      fontFamily="Poppins"
      fontSize="40"
      fill="#DC4405"
    >
      @
    </text>
    <text
      x="155"
      y="40"
      fontFamily="Poppins"
      fontSize="40"
      fontWeight="bold"
      fill="#DC4405"
    >
      OSU
    </text>
  </svg>
);

export const FooterLogo = () => (
  <div>
    <NavLogo footer />
  </div>
);
