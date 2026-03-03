export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-gray-100 text-amber-400 dark:text-red-400">{children}</div>;
}