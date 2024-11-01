export function Video({ srcLink }: { srcLink: string }): React.ReactNode {
  console.log("srcLink", srcLink);

  return (
    <video width="90%" className="mx-auto" height="720" loop muted autoPlay>
      <source src={srcLink + ".mp4"} type="video/mp4" />
    </video>
  );
}
