import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { Logo } from "~/components/icons";

import { siteName } from "~/lib/site";

type InquiryEmailTemplateProps = {
  message?: string;
  from?: string;
};

export default function FeedbackEmailTemplate({
  message = "Hello World",
  from,
}: InquiryEmailTemplateProps) {
  return (
    <Html>
      <Tailwind>
        <Body>
          <Container className="w-[660px] max-w-full bg-background-100">
            <Section>
              <Row>
                <Column className="w-10">
                  <Logo className="h-16 w-16 fill-foreground" />
                </Column>
                <Column>
                  <Text
                    className="font-bold text-2xl"
                  >
                    {siteName}
                  </Text>
                </Column>
              </Row>
            </Section>
            <Hr className="border-[#cccccc] my-5" />
            <Section>
              <Text
                className="text-foreground-body text-lg font-bold"
              >
                {from}
              </Text>
              <Text
                className="text-foreground-body"
              >
                {message}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
