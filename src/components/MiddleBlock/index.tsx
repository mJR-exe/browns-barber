import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper, Title } from "./styles";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: any;
}

const MiddleBlock = ({ title, content, button, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <ParallaxBanner style={{ aspectRatio: '2 / 1' }}  >
        <ParallaxBannerLayer image="/img/webp/barbershop.webp" speed={15} />
        <Slide direction="up">
          <Row justify="center" align="middle">
            <ContentWrapper>
              <Col lg={24} md={24} sm={24} xs={24}>
                <Title>{t(title)}</Title>
                <Content>{t(content)}</Content>
                {button && (
                  <Button name="submit" onClick={() => scrollTo("mission")}>
                    {t(button)}
                  </Button>
                )}
              </Col>
            </ContentWrapper>
          </Row>
        </Slide>
      </ParallaxBanner >
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
