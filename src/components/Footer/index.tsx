import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={6} md={6} sm={12} xs={12}>
              <Language>{t("Address")}</Language>
              <Para>Sonder Downtown Towers 3</Para>
              <Para>1st Floot</Para>
              <Para>Dubai - Emirados Árabes Unidos</Para>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Title>{t("Company")}</Title>
              <Large left="true" to="/">
                {t("About")}
              </Large>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Location")}</Title>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37997.204261505256!2d55.227501562034405!3d25.204142471434693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d4e816cc425%3A0xb274ac1b1ab07800!2sBrowns%20Spa%20at%20Sonder%20Downtown%20Towers!5e0!3m2!1spt-BR!2sbr!4v1696345289143!5m2!1spt-BR!2sbr" width="100%" height="350" loading="lazy" style={{ border: 0 }}></iframe>
            </Col>
            {/* <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col> */}
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://www.instagram.com/browns_barbershop_/"
                src="instagram.svg"
              />
              <SocialLink
                href="https://www.instagram.com/browns_barbershop_/"
                src="instagram.svg"
              />
              <SocialLink
                href="https://www.instagram.com/browns_barbershop_/"
                src="instagram.svg"
              />
              <SocialLink
                href="https://www.instagram.com/browns_barbershop_/"
                src="instagram.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
