import { Documento } from "../types/types";

type UseEmailSenderProps = {
  documents: Documento[];
  bodyText: string;
  subject: string;
};

export function useEmailSender({
  documents,
  bodyText,
  subject,
}: UseEmailSenderProps) {
  const sendEmail = () => {
    const links = documents.map(
      (doc) => `${window.location.origin}/${doc.pdf}`
    );
    const fullBody = `${bodyText}\n\n${links.join("\n")}`;
    const mailto = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(fullBody)}`;
    window.location.href = mailto;
  };

  return { sendEmail };
}
