import { forwardRef } from "react";
import { Icon } from "~/components";
import { IconType } from "~/enums";
import Image from "next/image";
import clsx from "clsx";
import { LogoutButton } from "./LogoutButton";
import { IconWrapper } from "./IconWrapper";

interface ProfileMenuProps {
  userName: string;
  onLogout: () => void;
  userImage?: string | null;
  isResponsiveDevice?: boolean;
}

export const ProfileMenu = forwardRef<HTMLDivElement, ProfileMenuProps>(
  ({ userName, onLogout, userImage, isResponsiveDevice }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "absolute min-w-52 rounded-lg bg-white uppercase shadow-lg ring-1 ring-black ring-opacity-5",
          isResponsiveDevice ? "bottom-20 right-2" : "right-0 top-20 lg:left-20"
        )}
      >
        <div className="p-2">
          <div className="flex items-center p-2">
            <span className="h-8 w-8 overflow-hidden rounded-full border-2 border-orange-hot">
              {userImage ? (
                <Image
                  src={userImage}
                  alt="Profile picture"
                  width={64}
                  height={64}
                  priority
                />
              ) : (
                <IconWrapper>
                  <Icon name={IconType.USER} className="text-xl text-white" />
                </IconWrapper>
              )}
            </span>
            <span className="pl-2 text-dark">{userName}</span>
          </div>
          <LogoutButton onLogout={onLogout} />
        </div>
      </div>
    );
  }
);

ProfileMenu.displayName = "ProfileMenu";
