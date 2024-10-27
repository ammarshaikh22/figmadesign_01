import Banner from "@/components/Banner";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main>
      <Banner />
      <Project img="/ecomart.png" heading="01 / PROJECT NAME" textOne="Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development." textTwo='Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.' linkText="More shots from this project ↗" />
      <Project img="/governor.png" heading="02 / PROJECT NAME" textOne="Subsurface weight, specular roughness, diffuse maps generated with the procedure and manual techniques." textTwo='' linkText="See case study →" />
      <Project img="/portfolio.png" heading="03 / PROJECT NAME" textOne="Experimental creature modeling for school project." textTwo='' linkText="Project WIP" />
    </main>
  );
}
