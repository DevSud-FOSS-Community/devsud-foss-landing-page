"use client";
import { Avatar, Typography, Card, CardContent, Grid, Button } from "@mui/material";
import { FaBug, FaDiscord, FaFileAlt, FaPaintBrush, FaShareAlt, FaTasks } from 'react-icons/fa';
import { FaChalkboardTeacher, FaCode, FaHandsHelping } from 'react-icons/fa';

export default function Home() {
  function handleButtonClick() {
  window.open("https://discord.gg/FbwakUtd5T", "_blank");
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-6xl">
        <header className="flex items-center justify-center mb-10">
          <img
            src="/images/DevSudLogo.png"
            alt="DevSud FOSS"
            style={{
              width: "auto",
              maxWidth: "180px",
              height: "auto",
            }}
          />
        </header>

        {/* Seção Principal */}
        <div className="text-center mt-4">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              lineHeight: 1.2,
              textAlign: "center",
              background: "linear-gradient(to right, #0056D2, #28A745)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1.5rem",
            }}
          >
            Seja um desenvolvedor voluntário!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              margin: "0 auto 1.5rem",
              fontSize: "clamp(1rem, 3vw, 1.5rem)",
              maxWidth: "700px",
              color: "#555",
              lineHeight: 1.6,
            }}
          >
            Somos uma comunidade de desenvolvedores{" "}
            <strong style={{ fontWeight: "bold" }}>《santos dos últimos dias》</strong>{" "}
            unidos por boas causas. Junte-se a nós para fazer a diferença com seus talentos e interesses!
          </Typography>

          <div className="flex justify-center mt-6">
            <Button
              onClick={handleButtonClick}
              variant="contained"
              sx={{
                fontSize: "1rem",
                fontWeight: "600",
                padding: "0.8rem 2rem",
                backgroundColor: "#5865F2",
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                borderRadius: "30px",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#4752C4",
                },
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <FaDiscord style={{ fontSize: "1.8rem" }} />
              Join Discord
            </Button>
          </div>
        </div>

        {/* Seção Ajude no seu próprio ritmo */}
        <div className="mt-16 text-center">
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
              marginBottom: "1rem",
            }}
          >
            Ajude no seu próprio ritmo!
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              color: "#666",
            }}
          >
            Não é necessário ser um expert! Cada pequena contribuição ajuda, seja aprendendo, ensinando ou desenvolvendo em nossos projetos.
          </Typography>
        </div>

        {/* Lista de Categorias */}
        <div className="flex flex-wrap justify-center mt-8 gap-6">
          {[
            {
              icon: <FaChalkboardTeacher size={30} />,
              title: "Aprenda",
              text: "Participe de aulas personalizadas e desenvolva suas habilidades como programador.",
              color: "#0056D2",
            },
            {
              icon: <FaHandsHelping size={30} />,
              title: "Ensine",
              text: "Compartilhe seu conhecimento e ajude outros a crescerem na programação.",
              color: "#28A745",
            },
            {
              icon: <FaCode size={30} />,
              title: "Contribua",
              text: "Trabalhe em projetos reais que fazem a diferença na comunidade.",
              color: "#6f42c1",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="max-w-xs shadow-md transition-transform transform hover:scale-105"
              sx={{ borderRadius: "15px", padding: "1rem" }}
            >
              <CardContent className="text-center">
                <Avatar
                  sx={{
                    bgcolor: item.color,
                    color: "#fff",
                    width: 70,
                    height: 70,
                    fontSize: "1.5rem",
                    margin: "0 auto 1rem",
                  }}
                >
                  {item.icon}
                </Avatar>
                <Typography variant="h6" className="font-bold">
                  {item.title}
                </Typography>
                <Typography variant="body2" className="mt-2 text-gray-600">
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>

{/* Como posso ajudar? */}
<div className="mt-16 bg-gradient-to-r from-blue-100 to-green-100 p-8 rounded-lg shadow-lg">
  <Typography
    variant="h4"
    sx={{
      fontWeight: 700,
      textAlign: "center",
      fontSize: "clamp(1.5rem, 4vw, 2rem)",
      marginBottom: "1rem",
      color: "#333",
    }}
  >
    Como posso ajudar?
  </Typography>
  <Grid container spacing={4}>
    {[
      { title: "Escrever Código", description: "Participe do desenvolvimento de projetos open source.", icon: <FaCode size={30} /> },
      { title: "Testar Projetos", description: "Ajude a identificar bugs e melhorar funcionalidades.", icon: <FaBug size={30} /> },
      { title: "Documentação", description: "Escreva e revise manuais e guias técnicos.", icon: <FaFileAlt size={30} /> },
      { title: "UI/UX Design", description: "Projete interfaces bonitas e intuitivas.", icon: <FaPaintBrush size={30} /> },
      { title: "Gerenciar Projetos", description: "Organize equipes e mantenha o progresso.", icon: <FaTasks size={30} /> },
      { title: "Divulgação", description: "Espalhe a palavra e atraia voluntários.", icon: <FaShareAlt size={30} /> },
    ].map((item, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card className="shadow-md hover:shadow-xl" sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
            <div className="flex justify-center mb-3">
              <Avatar
                sx={{
                  bgcolor: "#eaf4ff",
                  color: "#5865f2",
                  width: 60,
                  height: 60,
                  fontSize: "1.5rem",
                }}
              >
                {item.icon}
              </Avatar>
            </div>
            <Typography variant="h6" className="font-bold text-center">
              {item.title}
            </Typography>
            <Typography variant="body2" className="text-center mt-2 text-gray-600">
              {item.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</div>


        {/* Rodapé */}
        <footer className="text-center mt-16 text-gray-500">
          <Typography variant="body2">
            Este projeto é mantido por voluntários. Entre no Discord e comece hoje mesmo!
          </Typography>
          <Typography variant="caption">DevSud FOSS - 2024</Typography>
        </footer>
      </div>
    </div>
  );
}
