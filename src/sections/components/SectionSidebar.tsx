import { Avatar } from "flowbite-react";
import Link from "next/link";
import useCalculateHeight from "src/core/hooks/useCalculateHeight";

const SectionSidebar = () => {
  const { remainingHeight } = useCalculateHeight();

  return (
    <div
      className="bg-gray-50 format md:overflow-y-scroll hidden md:block"
      style={{ height: remainingHeight }}
    >
      <div className="px-4 py-8">
        <div className="p-2">
          <div className="border-b-2 pb-4 mb-8">
            <h4>
              狂ってる！世界にあった危険な遊び３選【楽しく放射線・処刑ごっこ・人体破壊おもちゃ】狂ってる！
            </h4>
            <div className="flex gap-2">
              <Avatar size={'sm'} className="text-gray-800" rounded>higakijin</Avatar>
            </div>
          </div>
          <h4 className="text-blue-800">Section 0: はじめに</h4>
          <div className="pb-4 flex flex-col gap-2 text-sm">
            <Link
              href={"/books/1/chapters/2"}
              className="font-semibold text-gray-800 px-4 py-2 no-underline"
            >
              0-1 TypeScript と React で Unsplash 風アプリを作ろう
            </Link>
            <Link
              href={"/books/1/chapters/2"}
              className="font-semibold text-gray-800 px-4 py-2 no-underline"
            >
              0-2 VSCode のインストール
            </Link>
            <Link
              href={"/books/1/chapters/2"}
              className="font-semibold text-gray-800 px-4 py-2 no-underline"
            >
              0-3 質問の仕方
            </Link>
          </div>
        </div>
        <div className="p-2">
          <h4 className="text-blue-800">Section 1: Typescriptとは？</h4>
          <div className="pb-4 flex flex-col gap-2">
            <Link
              href={"/books/1/chapters/2"}
              className="font-semibold text-gray-800 px-4 py-2 no-underline  bg-blue-100 rounded-sm"
            >
              0-1 TypeScript と React で Unsplash 風アプリを作ろう
            </Link>
            <Link
              href={"/books/1/chapters/2"}
              className="font-semibold text-gray-800 px-4 py-2 no-underline"
            >
              0-2 VSCode のインストール
            </Link>
            <Link
              href={"/books/1/chapters/2"}
              className="font-semibold text-gray-800 px-4 py-2 no-underline"
            >
              0-3 質問の仕方
            </Link>
          </div>
        </div>
        <div className="p-2">
          <h4 className="text-blue-800">Section 2: 環境構築</h4>
          <div className="pb-4 flex flex-col gap-2">
            <Link
              href={"/books/1/chapters/2"}
              className="font-semibold text-gray-800 px-4 py-2 no-underline"
            >
              0-1 TypeScript と React で Unsplash 風アプリを作ろう
            </Link>
            <Link
              href={"/books/1/chapters/2"}
              className="font-semibold text-gray-800 px-4 py-2 no-underline"
            >
              0-2 VSCode のインストール
            </Link>
            <Link
              href={"/books/1/chapters/2"}
              className="font-semibold text-gray-800 px-4 py-2 no-underline"
            >
              0-3 質問の仕方
            </Link>
          </div>
        </div>
        <div className="p-2">
          <h4 className="text-blue-800">Section 3: Javascriptとの比較</h4>
          <div className="pb-4 flex flex-col gap-2">
            <Link
              href={"/books/1/chapters/2"}
              className="font-semibold text-gray-800 px-4 py-2 no-underline"
            >
              0-1 TypeScript と React で Unsplash 風アプリを作ろう
            </Link>
            <Link
              href={"/books/1/chapters/2"}
              className="font-semibold text-gray-800 px-4 py-2 no-underline"
            >
              0-2 VSCode のインストール
            </Link>
            <Link
              href={"/books/1/chapters/2"}
              className="font-semibold text-gray-800 px-4 py-2 no-underline"
            >
              0-3 質問の仕方
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSidebar;
