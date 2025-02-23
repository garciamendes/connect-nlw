"use client";

import { IconButton } from "@/src/components/IconButton";
import { Input } from "@/src/components/Input";
import { Copy, Link } from "lucide-react";

interface InviteLinkProps {
  inviteLink: string;
}

export const InviteLinkInput = ({ inviteLink }: InviteLinkProps) => {
  const copyInviteLink = () => {
    navigator.clipboard.writeText(inviteLink);
    alert("Link copiado para área de transferência!");
  };

  return (
    <Input.Root>
      <Input.Icon>
        <Link className="size-5" />
      </Input.Icon>

      <Input.InputField defaultValue={inviteLink} readOnly />

      <IconButton onClick={copyInviteLink} className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </Input.Root>
  );
};
