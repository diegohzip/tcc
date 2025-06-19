const fichas = {
  "homem-iniciante-boa-2-sim": [
    ['Leg press', 'Panturrilha em pé', 'Desenvolvimento com halteres', 'Elevação lateral', 'Abdominal oblíquo', 'Abdominal máquina'],
    ['Cadeira extensora', 'Agachamento livre', 'Supino reto', 'Tríceps corda', 'Prancha lateral', 'Abdominal máquina'],
  ],
  "homem-iniciante-boa-2-nao": [
    ['Agachamento isométrico', 'Stiff com mochila', 'Tríceps banco', 'Remada unilateral com mochila', 'Prancha', 'Abdominal'],
    ['Agachamento isométrico', 'Stiff com mochila', 'Remada unilateral com mochila', 'Tríceps banco', 'Prancha', 'Abdominal infra'],
  ],
  "homem-iniciante-boa-3-sim": [
    ['Cadeira extensora', 'Mesa flexora', 'Puxada frontal', 'Elevação lateral', 'Abdominal máquina', 'Abdominal oblíquo'],
    ['Agachamento livre', 'Stiff', 'Puxada frontal', 'Supino reto', 'Elevação de pernas', 'Prancha abdominal'],
    ['Panturrilha em pé', 'Leg press', 'Elevação lateral', 'Tríceps corda', 'Elevação de pernas', 'Prancha lateral'],
  ],
  "homem-iniciante-boa-3-nao": [
    ['Panturrilha no degrau', 'Agachamento isométrico', 'Remada unilateral com mochila', 'Rosca com mochila', 'Prancha', 'Abdominal'],
    ['Stiff com mochila', 'Afundo', 'Remada unilateral com mochila', 'Tríceps banco', 'Prancha', 'Prancha lateral'],
    ['Agachamento livre', 'Agachamento isométrico', 'Remada unilateral com mochila', 'Tríceps banco', 'Abdominal', 'Canivete'],
  ],
  "homem-iniciante-boa-4-sim": [
    ['Mesa flexora', 'Stiff', 'Tríceps corda', 'Elevação lateral', 'Prancha lateral', 'Abdominal máquina'],
    ['Cadeira extensora', 'Mesa flexora', 'Elevação lateral', 'Desenvolvimento com halteres', 'Prancha abdominal', 'Abdominal oblíquo'],
    ['Panturrilha em pé', 'Agachamento livre', 'Supino reto', 'Rosca direta', 'Abdominal oblíquo', 'Prancha abdominal'],
    ['Stiff', 'Cadeira extensora', 'Puxada frontal', 'Supino reto', 'Abdominal máquina', 'Abdominal oblíquo'],
  ],
  "homem-iniciante-boa-4-nao": [
    ['Afundo', 'Agachamento livre', 'Elevação lateral com garrafa', 'Tríceps banco', 'Abdominal', 'Prancha'],
    ['Afundo', 'Agachamento isométrico', 'Flexão de braço', 'Tríceps banco', 'Prancha', 'Canivete'],
    ['Agachamento isométrico', 'Panturrilha no degrau', 'Tríceps banco', 'Rosca com mochila', 'Prancha', 'Abdominal'],
    ['Stiff com mochila', 'Agachamento isométrico', 'Flexão de braço', 'Rosca com mochila', 'Prancha', 'Abdominal'],
  ],
  "homem-iniciante-boa-5-sim": [
    ['Agachamento livre', 'Panturrilha em pé', 'Rosca direta', 'Desenvolvimento com halteres', 'Prancha abdominal', 'Elevação de pernas'],
    ['Stiff', 'Leg press', 'Tríceps corda', 'Supino reto', 'Prancha lateral', 'Prancha abdominal'],
    ['Agachamento livre', 'Leg press', 'Desenvolvimento com halteres', 'Puxada frontal', 'Abdominal máquina', 'Elevação de pernas'],
    ['Mesa flexora', 'Leg press', 'Desenvolvimento com halteres', 'Elevação lateral', 'Prancha lateral', 'Elevação de pernas'],
    ['Leg press', 'Cadeira extensora', 'Supino reto', 'Rosca direta', 'Prancha lateral', 'Elevação de pernas'],
  ],
  "homem-iniciante-boa-5-nao": [
    ['Agachamento livre', 'Stiff com mochila', 'Flexão de braço', 'Elevação lateral com garrafa', 'Prancha', 'Canivete'],
    ['Panturrilha no degrau', 'Afundo', 'Remada unilateral com mochila', 'Flexão de braço', 'Abdominal', 'Canivete'],
    ['Stiff com mochila', 'Agachamento livre', 'Elevação lateral com garrafa', 'Flexão de braço', 'Prancha', 'Abdominal'],
    ['Agachamento livre', 'Afundo', 'Elevação lateral com garrafa', 'Tríceps banco', 'Abdominal', 'Canivete'],
    ['Panturrilha no degrau', 'Agachamento livre', 'Tríceps banco', 'Rosca com mochila', 'Prancha lateral', 'Canivete'],
  ],
  "homem-iniciante-mediana-2-sim": [
    ['Stiff', 'Cadeira extensora', 'Supino reto', 'Desenvolvimento com halteres', 'Abdominal máquina', 'Elevação de pernas'],
    ['Mesa flexora', 'Stiff', 'Puxada frontal', 'Tríceps corda', 'Abdominal oblíquo', 'Prancha lateral'],
  ],
  "homem-iniciante-mediana-2-nao": [
    ['Panturrilha no degrau', 'Stiff com mochila', 'Remada unilateral com mochila', 'Flexão de braço', 'Abdominal infra', 'Canivete'],
    ['Agachamento isométrico', 'Agachamento livre', 'Rosca com mochila', 'Flexão de braço', 'Prancha lateral', 'Abdominal infra'],
  ],
  "homem-iniciante-mediana-3-sim": [
    ['Panturrilha em pé', 'Leg press', 'Puxada frontal', 'Rosca direta', 'Abdominal máquina', 'Elevação de pernas'],
    ['Mesa flexora', 'Agachamento livre', 'Tríceps corda', 'Supino reto', 'Elevação de pernas', 'Prancha abdominal'],
    ['Stiff', 'Agachamento livre', 'Elevação lateral', 'Puxada frontal', 'Abdominal máquina', 'Prancha abdominal'],
  ],
  "homem-iniciante-mediana-3-nao": [
    ['Stiff com mochila', 'Agachamento livre', 'Remada unilateral com mochila', 'Tríceps banco', 'Abdominal infra', 'Abdominal'],
    ['Afundo', 'Agachamento livre', 'Elevação lateral com garrafa', 'Tríceps banco', 'Prancha lateral', 'Abdominal'],
    ['Stiff com mochila', 'Agachamento livre', 'Rosca com mochila', 'Tríceps banco', 'Abdominal infra', 'Canivete'],
  ],
  "homem-iniciante-mediana-4-sim": [
    ['Cadeira extensora', 'Panturrilha em pé', 'Elevação lateral', 'Rosca direta', 'Abdominal máquina', 'Abdominal oblíquo'],
    ['Stiff', 'Cadeira extensora', 'Rosca direta', 'Puxada frontal', 'Prancha lateral', 'Abdominal oblíquo'],
    ['Stiff', 'Agachamento livre', 'Puxada frontal', 'Rosca direta', 'Abdominal oblíquo', 'Elevação de pernas'],
    ['Leg press', 'Cadeira extensora', 'Supino reto', 'Elevação lateral', 'Prancha lateral', 'Abdominal máquina'],
  ],
  "homem-iniciante-mediana-4-nao": [
    ['Panturrilha no degrau', 'Afundo', 'Elevação lateral com garrafa', 'Tríceps banco', 'Abdominal', 'Abdominal infra'],
    ['Afundo', 'Agachamento isométrico', 'Tríceps banco', 'Remada unilateral com mochila', 'Canivete', 'Prancha'],
    ['Agachamento livre', 'Stiff com mochila', 'Elevação lateral com garrafa', 'Flexão de braço', 'Prancha lateral', 'Abdominal infra'],
    ['Agachamento isométrico', 'Panturrilha no degrau', 'Rosca com mochila', 'Flexão de braço', 'Prancha', 'Abdominal infra'],
  ],
  "homem-iniciante-mediana-5-sim": [
    ['Mesa flexora', 'Leg press', 'Supino reto', 'Tríceps corda', 'Prancha lateral', 'Elevação de pernas'],
    ['Cadeira extensora', 'Stiff', 'Tríceps corda', 'Rosca direta', 'Prancha lateral', 'Elevação de pernas'],
    ['Agachamento livre', 'Cadeira extensora', 'Desenvolvimento com halteres', 'Elevação lateral', 'Elevação de pernas', 'Abdominal máquina'],
    ['Mesa flexora', 'Agachamento livre', 'Rosca direta', 'Tríceps corda', 'Prancha lateral', 'Elevação de pernas'],
    ['Cadeira extensora', 'Agachamento livre', 'Rosca direta', 'Elevação lateral', 'Abdominal máquina', 'Elevação de pernas'],
  ],
  "homem-iniciante-mediana-5-nao": [
    ['Stiff com mochila', 'Agachamento livre', 'Remada unilateral com mochila', 'Rosca com mochila', 'Abdominal', 'Canivete'],
    ['Agachamento isométrico', 'Afundo', 'Flexão de braço', 'Elevação lateral com garrafa', 'Abdominal infra', 'Prancha'],
    ['Stiff com mochila', 'Panturrilha no degrau', 'Rosca com mochila', 'Elevação lateral com garrafa', 'Prancha', 'Abdominal infra'],
    ['Afundo', 'Agachamento livre', 'Rosca com mochila', 'Flexão de braço', 'Prancha lateral', 'Abdominal infra'],
    ['Agachamento isométrico', 'Stiff com mochila', 'Rosca com mochila', 'Tríceps banco', 'Canivete', 'Prancha lateral'],
  ],
  "homem-iniciante-ruim-2-sim": [
    ['Stiff', 'Mesa flexora', 'Rosca direta', 'Tríceps corda', 'Abdominal oblíquo', 'Abdominal máquina'],
    ['Stiff', 'Mesa flexora', 'Elevação lateral', 'Supino reto', 'Prancha abdominal', 'Abdominal máquina'],
  ],
  "homem-iniciante-ruim-2-nao": [
    ['Agachamento isométrico', 'Stiff com mochila', 'Elevação lateral com garrafa', 'Rosca com mochila', 'Abdominal infra', 'Canivete'],
    ['Stiff com mochila', 'Afundo', 'Remada unilateral com mochila', 'Flexão de braço', 'Abdominal infra', 'Canivete'],
  ],
  "homem-iniciante-ruim-3-sim": [
    ['Leg press', 'Agachamento livre', 'Desenvolvimento com halteres', 'Tríceps corda', 'Abdominal oblíquo', 'Elevação de pernas'],
    ['Panturrilha em pé', 'Stiff', 'Desenvolvimento com halteres', 'Elevação lateral', 'Abdominal máquina', 'Elevação de pernas'],
    ['Agachamento livre', 'Panturrilha em pé', 'Rosca direta', 'Supino reto', 'Abdominal máquina', 'Elevação de pernas'],
  ],
  "homem-iniciante-ruim-3-nao": [
    ['Agachamento livre', 'Panturrilha no degrau', 'Flexão de braço', 'Elevação lateral com garrafa', 'Canivete', 'Abdominal'],
    ['Agachamento livre', 'Panturrilha no degrau', 'Remada unilateral com mochila', 'Elevação lateral com garrafa', 'Prancha lateral', 'Abdominal infra'],
    ['Agachamento livre', 'Panturrilha no degrau', 'Remada unilateral com mochila', 'Tríceps banco', 'Abdominal', 'Canivete'],
  ],
  "homem-iniciante-ruim-4-sim": [
    ['Leg press', 'Panturrilha em pé', 'Rosca direta', 'Tríceps corda', 'Prancha lateral', 'Elevação de pernas'],
    ['Panturrilha em pé', 'Stiff', 'Tríceps corda', 'Puxada frontal', 'Abdominal oblíquo', 'Prancha lateral'],
    ['Mesa flexora', 'Stiff', 'Elevação lateral', 'Rosca direta', 'Prancha lateral', 'Abdominal oblíquo'],
    ['Panturrilha em pé', 'Agachamento livre', 'Elevação lateral', 'Tríceps corda', 'Prancha lateral', 'Elevação de pernas'],
  ],
  "homem-iniciante-ruim-4-nao": [
    ['Afundo', 'Agachamento livre', 'Rosca com mochila', 'Remada unilateral com mochila', 'Prancha lateral', 'Canivete'],
    ['Agachamento livre', 'Stiff com mochila', 'Remada unilateral com mochila', 'Flexão de braço', 'Abdominal infra', 'Prancha lateral'],
    ['Afundo', 'Stiff com mochila', 'Rosca com mochila', 'Flexão de braço', 'Abdominal infra', 'Abdominal'],
    ['Panturrilha no degrau', 'Agachamento livre', 'Rosca com mochila', 'Elevação lateral com garrafa', 'Abdominal', 'Prancha lateral'],
  ],
  "homem-iniciante-ruim-5-sim": [
    ['Cadeira extensora', 'Panturrilha em pé', 'Rosca direta', 'Supino reto', 'Abdominal oblíquo', 'Prancha lateral'],
    ['Leg press', 'Panturrilha em pé', 'Desenvolvimento com halteres', 'Elevação lateral', 'Abdominal oblíquo', 'Prancha abdominal'],
    ['Agachamento livre', 'Mesa flexora', 'Rosca direta', 'Puxada frontal', 'Elevação de pernas', 'Prancha lateral'],
    ['Mesa flexora', 'Stiff', 'Tríceps corda', 'Puxada frontal', 'Abdominal oblíquo', 'Prancha abdominal'],
    ['Cadeira extensora', 'Panturrilha em pé', 'Supino reto', 'Tríceps corda', 'Prancha lateral', 'Prancha abdominal'],
  ],
  "homem-iniciante-ruim-5-nao": [
    ['Panturrilha no degrau', 'Agachamento isométrico', 'Remada unilateral com mochila', 'Tríceps banco', 'Abdominal infra', 'Prancha'],
    ['Agachamento isométrico', 'Stiff com mochila', 'Elevação lateral com garrafa', 'Remada unilateral com mochila', 'Prancha', 'Abdominal infra'],
    ['Panturrilha no degrau', 'Afundo', 'Flexão de braço', 'Elevação lateral com garrafa', 'Canivete', 'Abdominal infra'],
    ['Agachamento livre', 'Stiff com mochila', 'Tríceps banco', 'Remada unilateral com mochila', 'Prancha', 'Canivete'],
    ['Panturrilha no degrau', 'Agachamento isométrico', 'Elevação lateral com garrafa', 'Remada unilateral com mochila', 'Abdominal', 'Canivete'],
  ],
  "homem-intermediario-boa-2-sim": [
    ['Mesa flexora', 'Leg press', 'Tríceps corda', 'Desenvolvimento com halteres', 'Prancha lateral', 'Elevação de pernas'],
    ['Leg press', 'Cadeira extensora', 'Rosca direta', 'Desenvolvimento com halteres', 'Prancha abdominal', 'Elevação de pernas'],
  ],
  "homem-intermediario-boa-2-nao": [
    ['Agachamento livre', 'Panturrilha no degrau', 'Flexão de braço', 'Remada unilateral com mochila', 'Abdominal infra', 'Prancha lateral'],
    ['Agachamento isométrico', 'Agachamento livre', 'Elevação lateral com garrafa', 'Flexão de braço', 'Abdominal', 'Canivete'],
  ],
  "homem-intermediario-boa-3-sim": [
    ['Cadeira extensora', 'Leg press', 'Tríceps corda', 'Rosca direta', 'Prancha abdominal', 'Prancha lateral'],
    ['Panturrilha em pé', 'Cadeira extensora', 'Desenvolvimento com halteres', 'Tríceps corda', 'Prancha abdominal', 'Abdominal oblíquo'],
    ['Leg press', 'Agachamento livre', 'Supino reto', 'Tríceps corda', 'Abdominal oblíquo', 'Prancha abdominal'],
  ],
  "homem-intermediario-boa-3-nao": [
    ['Panturrilha no degrau', 'Afundo', 'Tríceps banco', 'Flexão de braço', 'Prancha lateral', 'Abdominal'],
    ['Panturrilha no degrau', 'Stiff com mochila', 'Tríceps banco', 'Elevação lateral com garrafa', 'Canivete', 'Prancha lateral'],
    ['Stiff com mochila', 'Afundo', 'Remada unilateral com mochila', 'Rosca com mochila', 'Canivete', 'Prancha lateral'],
  ],
  "homem-intermediario-boa-4-sim": [
    ['Cadeira extensora', 'Stiff', 'Elevação lateral', 'Supino reto', 'Prancha abdominal', 'Prancha lateral'],
    ['Panturrilha em pé', 'Cadeira extensora', 'Elevação lateral', 'Tríceps corda', 'Prancha abdominal', 'Elevação de pernas'],
    ['Cadeira extensora', 'Stiff', 'Desenvolvimento com halteres', 'Rosca direta', 'Prancha lateral', 'Abdominal oblíquo'],
    ['Mesa flexora', 'Stiff', 'Rosca direta', 'Elevação lateral', 'Abdominal oblíquo', 'Prancha lateral'],
  ],
  "homem-intermediario-boa-4-nao": [
    ['Agachamento isométrico', 'Agachamento livre', 'Elevação lateral com garrafa', 'Flexão de braço', 'Abdominal', 'Canivete'],
    ['Afundo', 'Agachamento livre', 'Remada unilateral com mochila', 'Rosca com mochila', 'Prancha lateral', 'Abdominal'],
    ['Agachamento livre', 'Afundo', 'Flexão de braço', 'Rosca com mochila', 'Prancha lateral', 'Canivete'],
    ['Panturrilha no degrau', 'Agachamento livre', 'Tríceps banco', 'Rosca com mochila', 'Prancha lateral', 'Abdominal infra'],
  ],
  "homem-intermediario-boa-5-sim": [
    ['Agachamento livre', 'Leg press', 'Rosca direta', 'Elevação lateral', 'Elevação de pernas', 'Abdominal máquina'],
    ['Agachamento livre', 'Stiff', 'Desenvolvimento com halteres', 'Tríceps corda', 'Elevação de pernas', 'Abdominal máquina'],
    ['Cadeira extensora', 'Panturrilha em pé', 'Supino reto', 'Rosca direta', 'Abdominal máquina', 'Elevação de pernas'],
    ['Mesa flexora', 'Cadeira extensora', 'Desenvolvimento com halteres', 'Supino reto', 'Abdominal máquina', 'Prancha abdominal'],
    ['Mesa flexora', 'Stiff', 'Puxada frontal', 'Supino reto', 'Prancha lateral', 'Abdominal oblíquo'],
  ],
  "homem-intermediario-boa-5-nao": [
    ['Stiff com mochila', 'Panturrilha no degrau', 'Flexão de braço', 'Rosca com mochila', 'Prancha', 'Prancha lateral'],
    ['Stiff com mochila', 'Agachamento isométrico', 'Flexão de braço', 'Elevação lateral com garrafa', 'Abdominal infra', 'Prancha'],
    ['Agachamento isométrico', 'Stiff com mochila', 'Tríceps banco', 'Elevação lateral com garrafa', 'Abdominal infra', 'Prancha'],
    ['Agachamento livre', 'Agachamento isométrico', 'Rosca com mochila', 'Flexão de braço', 'Prancha', 'Canivete'],
    ['Stiff com mochila', 'Afundo', 'Flexão de braço', 'Rosca com mochila', 'Abdominal infra', 'Prancha'],
  ],
  "homem-intermediario-mediana-2-sim": [
    ['Agachamento livre', 'Mesa flexora', 'Tríceps corda', 'Elevação lateral', 'Abdominal máquina', 'Abdominal oblíquo'],
    ['Stiff', 'Leg press', 'Rosca direta', 'Puxada frontal', 'Elevação de pernas', 'Prancha lateral'],
  ],
  "homem-intermediario-mediana-2-nao": [
    ['Stiff com mochila', 'Agachamento livre', 'Elevação lateral com garrafa', 'Tríceps banco', 'Prancha', 'Canivete'],
    ['Panturrilha no degrau', 'Afundo', 'Elevação lateral com garrafa', 'Rosca com mochila', 'Canivete', 'Abdominal infra'],
  ],
  "homem-intermediario-mediana-3-sim": [
    ['Panturrilha em pé', 'Mesa flexora', 'Elevação lateral', 'Supino reto', 'Abdominal oblíquo', 'Abdominal máquina'],
    ['Panturrilha em pé', 'Agachamento livre', 'Desenvolvimento com halteres', 'Rosca direta', 'Prancha abdominal', 'Elevação de pernas'],
    ['Stiff', 'Mesa flexora', 'Desenvolvimento com halteres', 'Rosca direta', 'Prancha abdominal', 'Abdominal máquina'],
  ],
  "homem-intermediario-mediana-3-nao": [
    ['Agachamento livre', 'Panturrilha no degrau', 'Elevação lateral com garrafa', 'Flexão de braço', 'Prancha lateral', 'Prancha'],
    ['Panturrilha no degrau', 'Agachamento livre', 'Flexão de braço', 'Rosca com mochila', 'Abdominal infra', 'Prancha'],
    ['Agachamento isométrico', 'Stiff com mochila', 'Elevação lateral com garrafa', 'Remada unilateral com mochila', 'Canivete', 'Prancha lateral'],
  ],
  "homem-intermediario-mediana-4-sim": [
    ['Agachamento livre', 'Panturrilha em pé', 'Rosca direta', 'Supino reto', 'Prancha lateral', 'Prancha abdominal'],
    ['Stiff', 'Panturrilha em pé', 'Supino reto', 'Puxada frontal', 'Abdominal oblíquo', 'Prancha lateral'],
    ['Agachamento livre', 'Cadeira extensora', 'Rosca direta', 'Elevação lateral', 'Elevação de pernas', 'Abdominal oblíquo'],
    ['Leg press', 'Mesa flexora', 'Desenvolvimento com halteres', 'Tríceps corda', 'Prancha lateral', 'Abdominal máquina'],
  ],
  "homem-intermediario-mediana-4-nao": [
    ['Panturrilha no degrau', 'Afundo', 'Rosca com mochila', 'Tríceps banco', 'Abdominal', 'Prancha lateral'],
    ['Agachamento isométrico', 'Stiff com mochila', 'Flexão de braço', 'Tríceps banco', 'Abdominal infra', 'Prancha'],
    ['Afundo', 'Agachamento livre', 'Elevação lateral com garrafa', 'Remada unilateral com mochila', 'Prancha lateral', 'Prancha'],
    ['Agachamento livre', 'Agachamento isométrico', 'Elevação lateral com garrafa', 'Remada unilateral com mochila', 'Abdominal', 'Prancha'],
  ],
  "homem-intermediario-mediana-5-sim": [
    ['Stiff', 'Cadeira extensora', 'Supino reto', 'Tríceps corda', 'Abdominal oblíquo', 'Prancha lateral'],
    ['Agachamento livre', 'Cadeira extensora', 'Elevação lateral', 'Desenvolvimento com halteres', 'Abdominal máquina', 'Prancha lateral'],
    ['Panturrilha em pé', 'Leg press', 'Elevação lateral', 'Rosca direta', 'Abdominal máquina', 'Elevação de pernas'],
    ['Mesa flexora', 'Agachamento livre', 'Supino reto', 'Rosca direta', 'Abdominal máquina', 'Prancha lateral'],
    ['Agachamento livre', 'Cadeira extensora', 'Tríceps corda', 'Elevação lateral', 'Prancha abdominal', 'Abdominal máquina'],
  ],
  "homem-intermediario-mediana-5-nao": [
    ['Panturrilha no degrau', 'Agachamento livre', 'Flexão de braço', 'Elevação lateral com garrafa', 'Prancha', 'Canivete'],
    ['Stiff com mochila', 'Agachamento isométrico', 'Elevação lateral com garrafa', 'Flexão de braço', 'Abdominal infra', 'Prancha'],
    ['Stiff com mochila', 'Afundo', 'Rosca com mochila', 'Flexão de braço', 'Prancha', 'Canivete'],
    ['Agachamento isométrico', 'Afundo', 'Tríceps banco', 'Rosca com mochila', 'Abdominal infra', 'Prancha lateral'],
    ['Agachamento livre', 'Panturrilha no degrau', 'Flexão de braço', 'Elevação lateral com garrafa', 'Abdominal', 'Prancha lateral'],
  ],
  "homem-intermediario-ruim-2-sim": [
    ['Agachamento livre', 'Leg press', 'Desenvolvimento com halteres', 'Puxada frontal', 'Abdominal oblíquo', 'Prancha abdominal'],
    ['Leg press', 'Panturrilha em pé', 'Desenvolvimento com halteres', 'Tríceps corda', 'Abdominal máquina', 'Abdominal oblíquo'],
  ],
  "homem-intermediario-ruim-2-nao": [
    ['Agachamento livre', 'Stiff com mochila', 'Remada unilateral com mochila', 'Flexão de braço', 'Prancha lateral', 'Canivete'],
    ['Stiff com mochila', 'Afundo', 'Rosca com mochila', 'Elevação lateral com garrafa', 'Prancha', 'Canivete'],
  ],
  "homem-intermediario-ruim-3-sim": [
    ['Agachamento livre', 'Cadeira extensora', 'Desenvolvimento com halteres', 'Puxada frontal', 'Abdominal oblíquo', 'Abdominal máquina'],
    ['Leg press', 'Stiff', 'Supino reto', 'Desenvolvimento com halteres', 'Abdominal oblíquo', 'Abdominal máquina'],
    ['Stiff', 'Leg press', 'Supino reto', 'Puxada frontal', 'Prancha abdominal', 'Abdominal oblíquo'],
  ],
  "homem-intermediario-ruim-3-nao": [
    ['Agachamento livre', 'Agachamento isométrico', 'Tríceps banco', 'Elevação lateral com garrafa', 'Prancha', 'Canivete'],
    ['Panturrilha no degrau', 'Agachamento livre', 'Elevação lateral com garrafa', 'Flexão de braço', 'Abdominal', 'Canivete'],
    ['Agachamento isométrico', 'Agachamento livre', 'Rosca com mochila', 'Elevação lateral com garrafa', 'Prancha lateral', 'Prancha'],
  ],
  "homem-intermediario-ruim-4-sim": [
    ['Panturrilha em pé', 'Leg press', 'Rosca direta', 'Elevação lateral', 'Prancha lateral', 'Abdominal máquina'],
    ['Cadeira extensora', 'Leg press', 'Rosca direta', 'Supino reto', 'Abdominal oblíquo', 'Abdominal máquina'],
    ['Stiff', 'Agachamento livre', 'Rosca direta', 'Supino reto', 'Abdominal máquina', 'Abdominal oblíquo'],
    ['Panturrilha em pé', 'Mesa flexora', 'Puxada frontal', 'Desenvolvimento com halteres', 'Abdominal máquina', 'Elevação de pernas'],
  ],
  "homem-intermediario-ruim-4-nao": [
    ['Agachamento isométrico', 'Agachamento livre', 'Tríceps banco', 'Remada unilateral com mochila', 'Prancha', 'Canivete'],
    ['Afundo', 'Panturrilha no degrau', 'Remada unilateral com mochila', 'Flexão de braço', 'Abdominal infra', 'Prancha lateral'],
    ['Panturrilha no degrau', 'Afundo', 'Remada unilateral com mochila', 'Flexão de braço', 'Abdominal', 'Prancha'],
    ['Afundo', 'Agachamento livre', 'Rosca com mochila', 'Remada unilateral com mochila', 'Abdominal', 'Prancha'],
  ],
  "homem-intermediario-ruim-5-sim": [
    ['Leg press', 'Stiff', 'Desenvolvimento com halteres', 'Supino reto', 'Prancha lateral', 'Abdominal oblíquo'],
    ['Panturrilha em pé', 'Stiff', 'Elevação lateral', 'Tríceps corda', 'Abdominal máquina', 'Abdominal oblíquo'],
    ['Cadeira extensora', 'Panturrilha em pé', 'Tríceps corda', 'Desenvolvimento com halteres', 'Abdominal oblíquo', 'Prancha lateral'],
    ['Cadeira extensora', 'Mesa flexora', 'Elevação lateral', 'Tríceps corda', 'Abdominal oblíquo', 'Prancha lateral'],
    ['Stiff', 'Panturrilha em pé', 'Desenvolvimento com halteres', 'Supino reto', 'Abdominal máquina', 'Elevação de pernas'],
  ],
  "homem-intermediario-ruim-5-nao": [
    ['Agachamento isométrico', 'Afundo', 'Remada unilateral com mochila', 'Rosca com mochila', 'Prancha', 'Canivete'],
    ['Agachamento isométrico', 'Stiff com mochila', 'Remada unilateral com mochila', 'Tríceps banco', 'Abdominal', 'Prancha'],
    ['Agachamento livre', 'Afundo', 'Remada unilateral com mochila', 'Flexão de braço', 'Abdominal infra', 'Prancha lateral'],
    ['Afundo', 'Agachamento isométrico', 'Flexão de braço', 'Remada unilateral com mochila', 'Prancha lateral', 'Prancha'],
    ['Agachamento isométrico', 'Stiff com mochila', 'Tríceps banco', 'Flexão de braço', 'Abdominal', 'Prancha'],
  ],
  "homem-avancado-boa-2-sim": [
    ['Cadeira extensora', 'Panturrilha em pé', 'Rosca direta', 'Desenvolvimento com halteres', 'Prancha abdominal', 'Elevação de pernas'],
    ['Cadeira extensora', 'Agachamento livre', 'Puxada frontal', 'Rosca direta', 'Elevação de pernas', 'Prancha lateral'],
  ],
  "homem-avancado-boa-2-nao": [
    ['Agachamento livre', 'Afundo', 'Remada unilateral com mochila', 'Elevação lateral com garrafa', 'Canivete', 'Abdominal infra'],
    ['Agachamento livre', 'Stiff com mochila', 'Elevação lateral com garrafa', 'Rosca com mochila', 'Prancha', 'Abdominal'],
  ],
  "homem-avancado-boa-3-sim": [
    ['Agachamento livre', 'Panturrilha em pé', 'Elevação lateral', 'Rosca direta', 'Elevação de pernas', 'Abdominal máquina'],
    ['Agachamento livre', 'Panturrilha em pé', 'Supino reto', 'Rosca direta', 'Prancha lateral', 'Elevação de pernas'],
    ['Agachamento livre', 'Leg press', 'Tríceps corda', 'Desenvolvimento com halteres', 'Abdominal máquina', 'Elevação de pernas'],
  ],
  "homem-avancado-boa-3-nao": [
    ['Afundo', 'Panturrilha no degrau', 'Elevação lateral com garrafa', 'Flexão de braço', 'Abdominal infra', 'Abdominal'],
    ['Agachamento livre', 'Stiff com mochila', 'Tríceps banco', 'Remada unilateral com mochila', 'Abdominal infra', 'Canivete'],
    ['Agachamento livre', 'Panturrilha no degrau', 'Tríceps banco', 'Rosca com mochila', 'Abdominal infra', 'Canivete'],
  ],
  "homem-avancado-boa-4-sim": [
    ['Stiff', 'Leg press', 'Tríceps corda', 'Supino reto', 'Prancha lateral', 'Abdominal máquina'],
    ['Mesa flexora', 'Panturrilha em pé', 'Desenvolvimento com halteres', 'Supino reto', 'Prancha abdominal', 'Abdominal oblíquo'],
    ['Leg press', 'Agachamento livre', 'Rosca direta', 'Desenvolvimento com halteres', 'Prancha abdominal', 'Abdominal oblíquo'],
    ['Panturrilha em pé', 'Cadeira extensora', 'Supino reto', 'Rosca direta', 'Prancha lateral', 'Abdominal máquina'],
  ],
  "homem-avancado-boa-4-nao": [
    ['Agachamento livre', 'Panturrilha no degrau', 'Remada unilateral com mochila', 'Elevação lateral com garrafa', 'Prancha', 'Canivete'],
    ['Stiff com mochila', 'Agachamento livre', 'Tríceps banco', 'Flexão de braço', 'Abdominal infra', 'Prancha'],
    ['Agachamento isométrico', 'Panturrilha no degrau', 'Remada unilateral com mochila', 'Flexão de braço', 'Prancha', 'Abdominal'],
    ['Agachamento isométrico', 'Stiff com mochila', 'Tríceps banco', 'Elevação lateral com garrafa', 'Canivete', 'Abdominal infra'],
  ],
  "homem-avancado-boa-5-sim": [
    ['Agachamento livre', 'Leg press', 'Desenvolvimento com halteres', 'Elevação lateral', 'Prancha lateral', 'Abdominal máquina'],
    ['Mesa flexora', 'Cadeira extensora', 'Rosca direta', 'Elevação lateral', 'Prancha lateral', 'Prancha abdominal'],
    ['Leg press', 'Cadeira extensora', 'Desenvolvimento com halteres', 'Elevação lateral', 'Prancha lateral', 'Abdominal máquina'],
    ['Mesa flexora', 'Agachamento livre', 'Puxada frontal', 'Desenvolvimento com halteres', 'Prancha lateral', 'Elevação de pernas'],
    ['Panturrilha em pé', 'Agachamento livre', 'Puxada frontal', 'Tríceps corda', 'Prancha lateral', 'Abdominal oblíquo'],
  ],
  "homem-avancado-boa-5-nao": [
    ['Panturrilha no degrau', 'Agachamento isométrico', 'Rosca com mochila', 'Elevação lateral com garrafa', 'Canivete', 'Abdominal'],
    ['Stiff com mochila', 'Agachamento isométrico', 'Remada unilateral com mochila', 'Rosca com mochila', 'Canivete', 'Abdominal'],
    ['Panturrilha no degrau', 'Afundo', 'Remada unilateral com mochila', 'Rosca com mochila', 'Canivete', 'Abdominal infra'],
    ['Afundo', 'Panturrilha no degrau', 'Elevação lateral com garrafa', 'Tríceps banco', 'Abdominal infra', 'Prancha lateral'],
    ['Panturrilha no degrau', 'Stiff com mochila', 'Elevação lateral com garrafa', 'Flexão de braço', 'Abdominal', 'Prancha lateral'],
  ],
  "homem-avancado-mediana-2-sim": [
    ['Leg press', 'Cadeira extensora', 'Elevação lateral', 'Puxada frontal', 'Prancha lateral', 'Prancha abdominal'],
    ['Stiff', 'Leg press', 'Puxada frontal', 'Rosca direta', 'Prancha abdominal', 'Prancha lateral'],
  ],
  "homem-avancado-mediana-2-nao": [
    ['Agachamento livre', 'Agachamento isométrico', 'Remada unilateral com mochila', 'Tríceps banco', 'Canivete', 'Abdominal infra'],
    ['Afundo', 'Agachamento isométrico', 'Elevação lateral com garrafa', 'Flexão de braço', 'Prancha', 'Abdominal'],
  ],
  "homem-avancado-mediana-3-sim": [
    ['Cadeira extensora', 'Stiff', 'Elevação lateral', 'Desenvolvimento com halteres', 'Abdominal oblíquo', 'Prancha abdominal'],
    ['Panturrilha em pé', 'Stiff', 'Supino reto', 'Tríceps corda', 'Prancha lateral', 'Abdominal máquina'],
    ['Mesa flexora', 'Stiff', 'Elevação lateral', 'Desenvolvimento com halteres', 'Prancha lateral', 'Abdominal oblíquo'],
  ],
  "homem-avancado-mediana-3-nao": [
    ['Afundo', 'Panturrilha no degrau', 'Remada unilateral com mochila', 'Elevação lateral com garrafa', 'Prancha', 'Prancha lateral'],
    ['Stiff com mochila', 'Agachamento livre', 'Tríceps banco', 'Elevação lateral com garrafa', 'Canivete', 'Prancha'],
    ['Agachamento livre', 'Agachamento isométrico', 'Remada unilateral com mochila', 'Elevação lateral com garrafa', 'Canivete', 'Abdominal infra'],
  ],
  "homem-avancado-mediana-4-sim": [
    ['Panturrilha em pé', 'Cadeira extensora', 'Rosca direta', 'Desenvolvimento com halteres', 'Elevação de pernas', 'Abdominal oblíquo'],
    ['Cadeira extensora', 'Leg press', 'Rosca direta', 'Puxada frontal', 'Abdominal máquina', 'Elevação de pernas'],
    ['Mesa flexora', 'Panturrilha em pé', 'Supino reto', 'Desenvolvimento com halteres', 'Prancha lateral', 'Prancha abdominal'],
    ['Panturrilha em pé', 'Agachamento livre', 'Rosca direta', 'Tríceps corda', 'Abdominal oblíquo', 'Elevação de pernas'],
  ],
  "homem-avancado-mediana-4-nao": [
    ['Panturrilha no degrau', 'Stiff com mochila', 'Elevação lateral com garrafa', 'Remada unilateral com mochila', 'Abdominal infra', 'Prancha lateral'],
    ['Agachamento isométrico', 'Stiff com mochila', 'Rosca com mochila', 'Flexão de braço', 'Abdominal infra', 'Prancha lateral'],
    ['Afundo', 'Panturrilha no degrau', 'Elevação lateral com garrafa', 'Flexão de braço', 'Canivete', 'Abdominal infra'],
    ['Panturrilha no degrau', 'Stiff com mochila', 'Elevação lateral com garrafa', 'Flexão de braço', 'Canivete', 'Prancha'],
  ],
  "homem-avancado-mediana-5-sim": [
    ['Mesa flexora', 'Panturrilha em pé', 'Elevação lateral', 'Rosca direta', 'Elevação de pernas', 'Abdominal oblíquo'],
    ['Leg press', 'Cadeira extensora', 'Rosca direta', 'Desenvolvimento com halteres', 'Prancha abdominal', 'Prancha lateral'],
    ['Leg press', 'Stiff', 'Puxada frontal', 'Supino reto', 'Abdominal oblíquo', 'Prancha abdominal'],
    ['Agachamento livre', 'Stiff', 'Elevação lateral', 'Supino reto', 'Prancha abdominal', 'Abdominal oblíquo'],
    ['Agachamento livre', 'Panturrilha em pé', 'Puxada frontal', 'Supino reto', 'Prancha abdominal', 'Prancha lateral'],
  ],
  "homem-avancado-mediana-5-nao": [
    ['Agachamento livre', 'Panturrilha no degrau', 'Elevação lateral com garrafa', 'Flexão de braço', 'Abdominal', 'Prancha lateral'],
    ['Agachamento livre', 'Agachamento isométrico', 'Remada unilateral com mochila', 'Elevação lateral com garrafa', 'Canivete', 'Abdominal'],
    ['Panturrilha no degrau', 'Agachamento isométrico', 'Flexão de braço', 'Elevação lateral com garrafa', 'Canivete', 'Abdominal'],
    ['Agachamento livre', 'Stiff com mochila', 'Rosca com mochila', 'Flexão de braço', 'Abdominal', 'Prancha lateral'],
    ['Agachamento livre', 'Panturrilha no degrau', 'Elevação lateral com garrafa', 'Tríceps banco', 'Prancha', 'Abdominal'],
  ],
  "homem-avancado-ruim-2-sim": [
    ['Stiff', 'Panturrilha em pé', 'Rosca direta', 'Supino reto', 'Prancha lateral', 'Abdominal oblíquo'],
    ['Cadeira extensora', 'Panturrilha em pé', 'Rosca direta', 'Desenvolvimento com halteres', 'Elevação de pernas', 'Abdominal máquina'],
  ],
  "homem-avancado-ruim-2-nao": [
    ['Agachamento isométrico', 'Panturrilha no degrau', 'Flexão de braço', 'Elevação lateral com garrafa', 'Abdominal', 'Canivete'],
    ['Panturrilha no degrau', 'Stiff com mochila', 'Remada unilateral com mochila', 'Flexão de braço', 'Canivete', 'Abdominal infra'],
  ],
  "homem-avancado-ruim-3-sim": [
    ['Stiff', 'Leg press', 'Supino reto', 'Tríceps corda', 'Abdominal máquina', 'Prancha abdominal'],
    ['Cadeira extensora', 'Mesa flexora', 'Tríceps corda', 'Elevação lateral', 'Abdominal máquina', 'Prancha abdominal'],
    ['Stiff', 'Panturrilha em pé', 'Tríceps corda', 'Puxada frontal', 'Prancha lateral', 'Abdominal oblíquo'],
  ],
  "homem-avancado-ruim-3-nao": [
    ['Stiff com mochila', 'Agachamento livre', 'Rosca com mochila', 'Flexão de braço', 'Prancha lateral', 'Canivete'],
    ['Afundo', 'Agachamento isométrico', 'Elevação lateral com garrafa', 'Tríceps banco', 'Canivete', 'Prancha'],
    ['Afundo', 'Agachamento isométrico', 'Remada unilateral com mochila', 'Tríceps banco', 'Prancha lateral', 'Prancha'],
  ],
  "homem-avancado-ruim-4-sim": [
    ['Stiff', 'Agachamento livre', 'Rosca direta', 'Desenvolvimento com halteres', 'Prancha lateral', 'Prancha abdominal'],
    ['Cadeira extensora', 'Stiff', 'Supino reto', 'Desenvolvimento com halteres', 'Abdominal oblíquo', 'Abdominal máquina'],
    ['Leg press', 'Agachamento livre', 'Puxada frontal', 'Desenvolvimento com halteres', 'Abdominal máquina', 'Prancha abdominal'],
    ['Agachamento livre', 'Mesa flexora', 'Desenvolvimento com halteres', 'Rosca direta', 'Elevação de pernas', 'Abdominal oblíquo'],
  ],
  "homem-avancado-ruim-4-nao": [
    ['Agachamento livre', 'Stiff com mochila', 'Remada unilateral com mochila', 'Elevação lateral com garrafa', 'Abdominal', 'Canivete'],
    ['Stiff com mochila', 'Panturrilha no degrau', 'Remada unilateral com mochila', 'Elevação lateral com garrafa', 'Abdominal', 'Prancha lateral'],
    ['Agachamento livre', 'Stiff com mochila', 'Elevação lateral com garrafa', 'Tríceps banco', 'Prancha lateral', 'Abdominal'],
    ['Afundo', 'Agachamento isométrico', 'Tríceps banco', 'Flexão de braço', 'Abdominal', 'Abdominal infra'],
  ],
  "homem-avancado-ruim-5-sim": [
    ['Leg press', 'Mesa flexora', 'Rosca direta', 'Supino reto', 'Abdominal máquina', 'Abdominal oblíquo'],
    ['Mesa flexora', 'Leg press', 'Rosca direta', 'Puxada frontal', 'Elevação de pernas', 'Prancha lateral'],
    ['Mesa flexora', 'Cadeira extensora', 'Elevação lateral', 'Rosca direta', 'Prancha lateral', 'Abdominal máquina'],
    ['Leg press', 'Cadeira extensora', 'Rosca direta', 'Tríceps corda', 'Abdominal máquina', 'Prancha abdominal'],
    ['Mesa flexora', 'Panturrilha em pé', 'Tríceps corda', 'Elevação lateral', 'Prancha abdominal', 'Abdominal oblíquo'],
  ],
  "homem-avancado-ruim-5-nao": [
    ['Agachamento livre', 'Afundo', 'Flexão de braço', 'Tríceps banco', 'Canivete', 'Prancha lateral'],
    ['Agachamento livre', 'Agachamento isométrico', 'Tríceps banco', 'Flexão de braço', 'Canivete', 'Abdominal infra'],
    ['Stiff com mochila', 'Agachamento livre', 'Tríceps banco', 'Flexão de braço', 'Prancha lateral', 'Abdominal infra'],
    ['Agachamento livre', 'Stiff com mochila', 'Flexão de braço', 'Tríceps banco', 'Abdominal', 'Abdominal infra'],
    ['Afundo', 'Panturrilha no degrau', 'Flexão de braço', 'Remada unilateral com mochila', 'Prancha lateral', 'Abdominal'],
  ],
  "mulher-iniciante-boa-2-sim": [
    ['Mesa flexora', 'Cadeira extensora', 'Rosca direta', 'Elevação lateral', 'Abdominal oblíquo', 'Prancha lateral'],
    ['Agachamento livre', 'Stiff', 'Rosca direta', 'Puxada frontal', 'Prancha abdominal', 'Elevação de pernas'],
  ],
  "mulher-iniciante-boa-2-nao": [
    ['Panturrilha no degrau', 'Afundo', 'Remada unilateral com mochila', 'Elevação lateral com garrafa', 'Prancha lateral', 'Canivete'],
    ['Afundo', 'Stiff com mochila', 'Elevação lateral com garrafa', 'Tríceps banco', 'Prancha', 'Prancha lateral'],
  ],
  "mulher-iniciante-boa-3-sim": [
    ['Panturrilha em pé', 'Agachamento livre', 'Puxada frontal', 'Rosca direta', 'Prancha abdominal', 'Prancha lateral'],
    ['Agachamento livre', 'Stiff', 'Desenvolvimento com halteres', 'Tríceps corda', 'Elevação de pernas', 'Abdominal máquina'],
    ['Agachamento livre', 'Mesa flexora', 'Desenvolvimento com halteres', 'Tríceps corda', 'Prancha lateral', 'Abdominal oblíquo'],
  ],
  "mulher-iniciante-boa-3-nao": [
    ['Stiff com mochila', 'Panturrilha no degrau', 'Rosca com mochila', 'Elevação lateral com garrafa', 'Prancha lateral', 'Abdominal infra'],
    ['Panturrilha no degrau', 'Afundo', 'Elevação lateral com garrafa', 'Rosca com mochila', 'Abdominal infra', 'Canivete'],
    ['Panturrilha no degrau', 'Agachamento isométrico', 'Tríceps banco', 'Elevação lateral com garrafa', 'Abdominal', 'Prancha'],
  ],
  "mulher-iniciante-boa-4-sim": [
    ['Cadeira extensora', 'Leg press', 'Desenvolvimento com halteres', 'Elevação lateral', 'Abdominal máquina', 'Elevação de pernas'],
    ['Agachamento livre', 'Panturrilha em pé', 'Tríceps corda', 'Supino reto', 'Abdominal oblíquo', 'Elevação de pernas'],
    ['Panturrilha em pé', 'Mesa flexora', 'Elevação lateral', 'Desenvolvimento com halteres', 'Abdominal oblíquo', 'Abdominal máquina'],
    ['Stiff', 'Agachamento livre', 'Puxada frontal', 'Rosca direta', 'Prancha abdominal', 'Elevação de pernas'],
  ],
  "mulher-iniciante-boa-4-nao": [
    ['Agachamento isométrico', 'Panturrilha no degrau', 'Elevação lateral com garrafa', 'Rosca com mochila', 'Abdominal', 'Canivete'],
    ['Panturrilha no degrau', 'Agachamento livre', 'Elevação lateral com garrafa', 'Rosca com mochila', 'Abdominal', 'Abdominal infra'],
    ['Agachamento livre', 'Panturrilha no degrau', 'Remada unilateral com mochila', 'Tríceps banco', 'Prancha', 'Abdominal'],
    ['Panturrilha no degrau', 'Agachamento livre', 'Rosca com mochila', 'Remada unilateral com mochila', 'Abdominal infra', 'Prancha lateral'],
  ],
  "mulher-iniciante-boa-5-sim": [
    ['Cadeira extensora', 'Agachamento livre', 'Desenvolvimento com halteres', 'Elevação lateral', 'Prancha abdominal', 'Prancha lateral'],
    ['Mesa flexora', 'Stiff', 'Puxada frontal', 'Desenvolvimento com halteres', 'Prancha abdominal', 'Prancha lateral'],
    ['Leg press', 'Stiff', 'Puxada frontal', 'Elevação lateral', 'Abdominal máquina', 'Prancha lateral'],
    ['Mesa flexora', 'Agachamento livre', 'Rosca direta', 'Desenvolvimento com halteres', 'Abdominal máquina', 'Prancha abdominal'],
    ['Leg press', 'Agachamento livre', 'Elevação lateral', 'Desenvolvimento com halteres', 'Abdominal máquina', 'Elevação de pernas'],
  ],
  "mulher-iniciante-boa-5-nao": [
    ['Afundo', 'Agachamento isométrico', 'Remada unilateral com mochila', 'Tríceps banco', 'Prancha lateral', 'Canivete'],
    ['Agachamento isométrico', 'Afundo', 'Remada unilateral com mochila', 'Elevação lateral com garrafa', 'Prancha', 'Abdominal'],
    ['Afundo', 'Agachamento isométrico', 'Elevação lateral com garrafa', 'Remada unilateral com mochila', 'Abdominal infra', 'Canivete'],
    ['Stiff com mochila', 'Agachamento isométrico', 'Flexão de braço', 'Rosca com mochila', 'Prancha lateral', 'Abdominal'],
    ['Stiff com mochila', 'Afundo', 'Elevação lateral com garrafa', 'Rosca com mochila', 'Prancha lateral', 'Prancha'],
  ],
  "mulher-iniciante-mediana-2-sim": [
    ['Cadeira extensora', 'Mesa flexora', 'Tríceps corda', 'Rosca direta', 'Prancha lateral', 'Prancha abdominal'],
    ['Stiff', 'Leg press', 'Rosca direta', 'Puxada frontal', 'Prancha lateral', 'Abdominal máquina'],
  ],
  "mulher-iniciante-mediana-2-nao": [
    ['Afundo', 'Agachamento isométrico', 'Tríceps banco', 'Remada unilateral com mochila', 'Prancha lateral', 'Abdominal infra'],
    ['Panturrilha no degrau', 'Afundo', 'Elevação lateral com garrafa', 'Rosca com mochila', 'Abdominal infra', 'Prancha lateral'],
  ],
  "mulher-iniciante-mediana-3-sim": [
    ['Cadeira extensora', 'Stiff', 'Rosca direta', 'Tríceps corda', 'Abdominal máquina', 'Abdominal oblíquo'],
    ['Mesa flexora', 'Cadeira extensora', 'Puxada frontal', 'Supino reto', 'Abdominal máquina', 'Abdominal oblíquo'],
    ['Mesa flexora', 'Leg press', 'Puxada frontal', 'Tríceps corda', 'Abdominal oblíquo', 'Prancha lateral'],
  ],
  "mulher-iniciante-mediana-3-nao": [
    ['Agachamento livre', 'Panturrilha no degrau', 'Remada unilateral com mochila', 'Flexão de braço', 'Abdominal', 'Canivete'],
    ['Agachamento livre', 'Agachamento isométrico', 'Tríceps banco', 'Rosca com mochila', 'Prancha', 'Abdominal'],
    ['Panturrilha no degrau', 'Stiff com mochila', 'Flexão de braço', 'Elevação lateral com garrafa', 'Abdominal', 'Canivete'],
  ],
  "mulher-iniciante-mediana-4-sim": [
    ['Agachamento livre', 'Panturrilha em pé', 'Elevação lateral', 'Tríceps corda', 'Elevação de pernas', 'Prancha abdominal'],
    ['Cadeira extensora', 'Agachamento livre', 'Rosca direta', 'Supino reto', 'Prancha abdominal', 'Abdominal oblíquo'],
    ['Mesa flexora', 'Panturrilha em pé', 'Supino reto', 'Puxada frontal', 'Prancha abdominal', 'Abdominal oblíquo'],
    ['Leg press', 'Mesa flexora', 'Tríceps corda', 'Desenvolvimento com halteres', 'Prancha abdominal', 'Elevação de pernas'],
  ],
  "mulher-iniciante-mediana-4-nao": [
    ['Agachamento livre', 'Afundo', 'Elevação lateral com garrafa', 'Rosca com mochila', 'Abdominal infra', 'Canivete'],
    ['Afundo', 'Agachamento livre', 'Flexão de braço', 'Remada unilateral com mochila', 'Canivete', 'Prancha lateral'],
    ['Agachamento isométrico', 'Agachamento livre', 'Tríceps banco', 'Remada unilateral com mochila', 'Prancha', 'Prancha lateral'],
    ['Afundo', 'Stiff com mochila', 'Flexão de braço', 'Rosca com mochila', 'Canivete', 'Abdominal infra'],
  ],
  "mulher-iniciante-mediana-5-sim": [
    ['Leg press', 'Mesa flexora', 'Supino reto', 'Tríceps corda', 'Prancha lateral', 'Elevação de pernas'],
    ['Panturrilha em pé', 'Cadeira extensora', 'Desenvolvimento com halteres', 'Puxada frontal', 'Abdominal oblíquo', 'Elevação de pernas'],
    ['Leg press', 'Agachamento livre', 'Supino reto', 'Puxada frontal', 'Prancha lateral', 'Elevação de pernas'],
    ['Leg press', 'Mesa flexora', 'Desenvolvimento com halteres', 'Supino reto', 'Abdominal máquina', 'Abdominal oblíquo'],
    ['Leg press', 'Panturrilha em pé', 'Supino reto', 'Desenvolvimento com halteres', 'Prancha lateral', 'Abdominal máquina'],
  ],
  "mulher-iniciante-mediana-5-nao": [
    ['Afundo', 'Agachamento isométrico', 'Rosca com mochila', 'Flexão de braço', 'Canivete', 'Prancha'],
    ['Afundo', 'Agachamento isométrico', 'Rosca com mochila', 'Flexão de braço', 'Abdominal', 'Abdominal infra'],
    ['Agachamento livre', 'Panturrilha no degrau', 'Tríceps banco', 'Remada unilateral com mochila', 'Prancha lateral', 'Abdominal'],
    ['Agachamento livre', 'Afundo', 'Remada unilateral com mochila', 'Rosca com mochila', 'Canivete', 'Abdominal infra'],
    ['Agachamento livre', 'Agachamento isométrico', 'Elevação lateral com garrafa', 'Flexão de braço', 'Canivete', 'Prancha lateral'],
  ],
  "mulher-iniciante-ruim-2-sim": [
    ['Panturrilha em pé', 'Agachamento livre', 'Supino reto', 'Desenvolvimento com halteres', 'Abdominal máquina', 'Prancha abdominal'],
    ['Mesa flexora', 'Panturrilha em pé', 'Supino reto', 'Desenvolvimento com halteres', 'Abdominal oblíquo', 'Prancha lateral'],
  ],
  "mulher-iniciante-ruim-2-nao": [
    ['Agachamento isométrico', 'Panturrilha no degrau', 'Flexão de braço', 'Tríceps banco', 'Abdominal infra', 'Prancha'],
    ['Afundo', 'Agachamento livre', 'Rosca com mochila', 'Elevação lateral com garrafa', 'Prancha', 'Abdominal'],
  ],
  "mulher-iniciante-ruim-3-sim": [
    ['Agachamento livre', 'Stiff', 'Desenvolvimento com halteres', 'Elevação lateral', 'Prancha abdominal', 'Elevação de pernas'],
    ['Agachamento livre', 'Mesa flexora', 'Puxada frontal', 'Rosca direta', 'Elevação de pernas', 'Abdominal máquina'],
    ['Mesa flexora', 'Panturrilha em pé', 'Supino reto', 'Rosca direta', 'Elevação de pernas', 'Prancha lateral'],
  ],
  "mulher-iniciante-ruim-3-nao": [
    ['Stiff com mochila', 'Afundo', 'Flexão de braço', 'Rosca com mochila', 'Prancha', 'Abdominal infra'],
    ['Panturrilha no degrau', 'Agachamento isométrico', 'Remada unilateral com mochila', 'Flexão de braço', 'Abdominal infra', 'Abdominal'],
    ['Panturrilha no degrau', 'Stiff com mochila', 'Remada unilateral com mochila', 'Rosca com mochila', 'Abdominal infra', 'Abdominal'],
  ],
  "mulher-iniciante-ruim-4-sim": [
    ['Cadeira extensora', 'Mesa flexora', 'Supino reto', 'Rosca direta', 'Prancha abdominal', 'Abdominal máquina'],
    ['Stiff', 'Mesa flexora', 'Elevação lateral', 'Rosca direta', 'Abdominal máquina', 'Prancha lateral'],
    ['Stiff', 'Mesa flexora', 'Rosca direta', 'Puxada frontal', 'Elevação de pernas', 'Prancha lateral'],
    ['Mesa flexora', 'Agachamento livre', 'Puxada frontal', 'Rosca direta', 'Abdominal oblíquo', 'Elevação de pernas'],
  ],
  "mulher-iniciante-ruim-4-nao": [
    ['Stiff com mochila', 'Agachamento isométrico', 'Flexão de braço', 'Remada unilateral com mochila', 'Abdominal', 'Abdominal infra'],
    ['Afundo', 'Stiff com mochila', 'Elevação lateral com garrafa', 'Tríceps banco', 'Prancha lateral', 'Prancha'],
    ['Agachamento isométrico', 'Stiff com mochila', 'Elevação lateral com garrafa', 'Flexão de braço', 'Abdominal', 'Abdominal infra'],
    ['Stiff com mochila', 'Agachamento livre', 'Flexão de braço', 'Rosca com mochila', 'Abdominal', 'Prancha lateral'],
  ],
  "mulher-iniciante-ruim-5-sim": [
    ['Cadeira extensora', 'Agachamento livre', 'Supino reto', 'Tríceps corda', 'Abdominal oblíquo', 'Prancha abdominal'],
    ['Cadeira extensora', 'Panturrilha em pé', 'Puxada frontal', 'Supino reto', 'Elevação de pernas', 'Prancha abdominal'],
    ['Stiff', 'Mesa flexora', 'Rosca direta', 'Puxada frontal', 'Prancha lateral', 'Prancha abdominal'],
    ['Agachamento livre', 'Panturrilha em pé', 'Rosca direta', 'Puxada frontal', 'Abdominal oblíquo', 'Prancha lateral'],
    ['Agachamento livre', 'Panturrilha em pé', 'Elevação lateral', 'Rosca direta', 'Abdominal oblíquo', 'Prancha abdominal'],
  ],
  "mulher-iniciante-ruim-5-nao": [
    ['Panturrilha no degrau', 'Afundo', 'Rosca com mochila', 'Remada unilateral com mochila', 'Abdominal', 'Abdominal infra'],
    ['Afundo', 'Panturrilha no degrau', 'Rosca com mochila', 'Flexão de braço', 'Canivete', 'Abdominal'],
    ['Stiff com mochila', 'Agachamento isométrico', 'Flexão de braço', 'Rosca com mochila', 'Prancha lateral', 'Canivete'],
    ['Agachamento isométrico', 'Agachamento livre', 'Elevação lateral com garrafa', 'Remada unilateral com mochila', 'Prancha', 'Prancha lateral'],
    ['Stiff com mochila', 'Afundo', 'Rosca com mochila', 'Tríceps banco', 'Prancha', 'Abdominal infra'],
  ],
  "mulher-intermediario-boa-2-sim": [
    ['Agachamento livre', 'Panturrilha em pé', 'Tríceps corda', 'Elevação lateral', 'Prancha lateral', 'Abdominal máquina'],
    ['Cadeira extensora', 'Mesa flexora', 'Elevação lateral', 'Rosca direta', 'Prancha abdominal', 'Abdominal máquina'],
  ],
  "mulher-intermediario-boa-2-nao": [
    ['Agachamento isométrico', 'Afundo', 'Elevação lateral com garrafa', 'Flexão de braço', 'Canivete', 'Prancha'],
    ['Agachamento livre', 'Agachamento isométrico', 'Elevação lateral com garrafa', 'Remada unilateral com mochila', 'Prancha lateral', 'Abdominal'],
  ],
  "mulher-intermediario-boa-3-sim": [
    ['Agachamento livre', 'Panturrilha em pé', 'Supino reto', 'Rosca direta', 'Abdominal oblíquo', 'Abdominal máquina'],
    ['Leg press', 'Agachamento livre', 'Supino reto', 'Rosca direta', 'Prancha abdominal', 'Prancha lateral'],
    ['Stiff', 'Leg press', 'Tríceps corda', 'Desenvolvimento com halteres', 'Prancha lateral', 'Elevação de pernas'],
  ],
  "mulher-intermediario-boa-3-nao": [
    ['Agachamento isométrico', 'Agachamento livre', 'Tríceps banco', 'Remada unilateral com mochila', 'Prancha', 'Canivete'],
    ['Agachamento isométrico', 'Afundo', 'Elevação lateral com garrafa', 'Remada unilateral com mochila', 'Canivete', 'Abdominal'],
    ['Stiff com mochila', 'Agachamento livre', 'Rosca com mochila', 'Elevação lateral com garrafa', 'Prancha', 'Abdominal infra'],
  ],
  "mulher-intermediario-boa-4-sim": [
    ['Agachamento livre', 'Stiff', 'Rosca direta', 'Tríceps corda', 'Prancha lateral', 'Abdominal máquina'],
    ['Panturrilha em pé', 'Leg press', 'Rosca direta', 'Desenvolvimento com halteres', 'Prancha abdominal', 'Abdominal oblíquo'],
    ['Cadeira extensora', 'Mesa flexora', 'Tríceps corda', 'Desenvolvimento com halteres', 'Prancha lateral', 'Abdominal máquina'],
    ['Leg press', 'Agachamento livre', 'Tríceps corda', 'Desenvolvimento com halteres', 'Elevação de pernas', 'Abdominal máquina'],
  ],
  "mulher-intermediario-boa-4-nao": [
    ['Stiff com mochila', 'Afundo', 'Tríceps banco', 'Flexão de braço', 'Abdominal infra', 'Abdominal'],
    ['Panturrilha no degrau', 'Stiff com mochila', 'Tríceps banco', 'Flexão de braço', 'Prancha lateral', 'Abdominal'],
    ['Stiff com mochila', 'Agachamento isométrico', 'Remada unilateral com mochila', 'Flexão de braço', 'Abdominal infra', 'Canivete'],
    ['Afundo', 'Stiff com mochila', 'Flexão de braço', 'Tríceps banco', 'Canivete', 'Abdominal'],
  ],
  "mulher-intermediario-boa-5-sim": [
    ['Panturrilha em pé', 'Mesa flexora', 'Desenvolvimento com halteres', 'Puxada frontal', 'Abdominal máquina', 'Abdominal oblíquo'],
    ['Panturrilha em pé', 'Cadeira extensora', 'Desenvolvimento com halteres', 'Puxada frontal', 'Abdominal máquina', 'Prancha abdominal'],
    ['Stiff', 'Cadeira extensora', 'Elevação lateral', 'Rosca direta', 'Abdominal oblíquo', 'Prancha abdominal'],
    ['Stiff', 'Cadeira extensora', 'Supino reto', 'Desenvolvimento com halteres', 'Abdominal oblíquo', 'Prancha lateral'],
    ['Leg press', 'Agachamento livre', 'Elevação lateral', 'Puxada frontal', 'Abdominal máquina', 'Prancha abdominal'],
  ],
  "mulher-intermediario-boa-5-nao": [
    ['Stiff com mochila', 'Agachamento isométrico', 'Elevação lateral com garrafa', 'Remada unilateral com mochila', 'Abdominal infra', 'Canivete'],
    ['Panturrilha no degrau', 'Afundo', 'Remada unilateral com mochila', 'Rosca com mochila', 'Canivete', 'Prancha lateral'],
    ['Agachamento livre', 'Agachamento isométrico', 'Flexão de braço', 'Tríceps banco', 'Abdominal', 'Prancha lateral'],
    ['Agachamento isométrico', 'Panturrilha no degrau', 'Flexão de braço', 'Tríceps banco', 'Prancha lateral', 'Canivete'],
    ['Agachamento isométrico', 'Afundo', 'Tríceps banco', 'Flexão de braço', 'Abdominal', 'Canivete'],
  ],
  "mulher-intermediario-mediana-2-sim": [
    ['Leg press', 'Agachamento livre', 'Rosca direta', 'Puxada frontal', 'Abdominal máquina', 'Elevação de pernas'],
    ['Agachamento livre', 'Panturrilha em pé', 'Rosca direta', 'Elevação lateral', 'Abdominal oblíquo', 'Elevação de pernas'],
  ],
  "mulher-intermediario-mediana-2-nao": [
    ['Stiff com mochila', 'Agachamento livre', 'Remada unilateral com mochila', 'Rosca com mochila', 'Canivete', 'Prancha'],
    ['Agachamento livre', 'Agachamento isométrico', 'Remada unilateral com mochila', 'Rosca com mochila', 'Prancha', 'Abdominal'],
  ],
  "mulher-intermediario-mediana-3-sim": [
    ['Cadeira extensora', 'Leg press', 'Desenvolvimento com halteres', 'Supino reto', 'Prancha abdominal', 'Abdominal oblíquo'],
    ['Agachamento livre', 'Stiff', 'Rosca direta', 'Desenvolvimento com halteres', 'Prancha lateral', 'Elevação de pernas'],
    ['Mesa flexora', 'Panturrilha em pé', 'Elevação lateral', 'Supino reto', 'Prancha abdominal', 'Prancha lateral'],
  ],
  "mulher-intermediario-mediana-3-nao": [
    ['Afundo', 'Agachamento livre', 'Rosca com mochila', 'Flexão de braço', 'Prancha', 'Abdominal'],
    ['Agachamento livre', 'Afundo', 'Flexão de braço', 'Rosca com mochila', 'Prancha', 'Prancha lateral'],
    ['Stiff com mochila', 'Agachamento isométrico', 'Rosca com mochila', 'Remada unilateral com mochila', 'Prancha lateral', 'Canivete'],
  ],
  "mulher-intermediario-mediana-4-sim": [
    ['Leg press', 'Stiff', 'Puxada frontal', 'Rosca direta', 'Abdominal oblíquo', 'Prancha abdominal'],
    ['Mesa flexora', 'Leg press', 'Elevação lateral', 'Rosca direta', 'Prancha lateral', 'Elevação de pernas'],
    ['Panturrilha em pé', 'Agachamento livre', 'Desenvolvimento com halteres', 'Rosca direta', 'Elevação de pernas', 'Abdominal máquina'],
    ['Stiff', 'Panturrilha em pé', 'Supino reto', 'Elevação lateral', 'Prancha abdominal', 'Abdominal máquina'],
  ],
  "mulher-intermediario-mediana-4-nao": [
    ['Afundo', 'Panturrilha no degrau', 'Flexão de braço', 'Elevação lateral com garrafa', 'Prancha', 'Abdominal infra'],
    ['Afundo', 'Agachamento livre', 'Rosca com mochila', 'Flexão de braço', 'Prancha lateral', 'Abdominal infra'],
    ['Agachamento isométrico', 'Agachamento livre', 'Rosca com mochila', 'Remada unilateral com mochila', 'Prancha', 'Prancha lateral'],
    ['Afundo', 'Agachamento livre', 'Flexão de braço', 'Rosca com mochila', 'Canivete', 'Abdominal'],
  ],
  "mulher-intermediario-mediana-5-sim": [
    ['Panturrilha em pé', 'Mesa flexora', 'Desenvolvimento com halteres', 'Elevação lateral', 'Abdominal oblíquo', 'Elevação de pernas'],
    ['Cadeira extensora', 'Stiff', 'Rosca direta', 'Desenvolvimento com halteres', 'Abdominal oblíquo', 'Prancha lateral'],
    ['Agachamento livre', 'Cadeira extensora', 'Elevação lateral', 'Tríceps corda', 'Abdominal oblíquo', 'Elevação de pernas'],
    ['Leg press', 'Panturrilha em pé', 'Supino reto', 'Elevação lateral', 'Abdominal máquina', 'Abdominal oblíquo'],
    ['Agachamento livre', 'Panturrilha em pé', 'Rosca direta', 'Elevação lateral', 'Elevação de pernas', 'Abdominal oblíquo'],
  ],
  "mulher-intermediario-mediana-5-nao": [
    ['Panturrilha no degrau', 'Stiff com mochila', 'Flexão de braço', 'Tríceps banco', 'Abdominal infra', 'Canivete'],
    ['Afundo', 'Panturrilha no degrau', 'Remada unilateral com mochila', 'Elevação lateral com garrafa', 'Prancha lateral', 'Abdominal infra'],
    ['Agachamento isométrico', 'Agachamento livre', 'Remada unilateral com mochila', 'Tríceps banco', 'Abdominal', 'Prancha'],
    ['Agachamento livre', 'Panturrilha no degrau', 'Rosca com mochila', 'Elevação lateral com garrafa', 'Prancha', 'Abdominal'],
    ['Agachamento livre', 'Afundo', 'Flexão de braço', 'Tríceps banco', 'Abdominal', 'Prancha lateral'],
  ],
  "mulher-intermediario-ruim-2-sim": [
    ['Mesa flexora', 'Cadeira extensora', 'Tríceps corda', 'Desenvolvimento com halteres', 'Prancha lateral', 'Elevação de pernas'],
    ['Stiff', 'Panturrilha em pé', 'Desenvolvimento com halteres', 'Elevação lateral', 'Abdominal oblíquo', 'Prancha lateral'],
  ],
  "mulher-intermediario-ruim-2-nao": [
    ['Agachamento isométrico', 'Panturrilha no degrau', 'Flexão de braço', 'Tríceps banco', 'Canivete', 'Prancha lateral'],
    ['Agachamento livre', 'Afundo', 'Tríceps banco', 'Rosca com mochila', 'Canivete', 'Prancha'],
  ],
  "mulher-intermediario-ruim-3-sim": [
    ['Panturrilha em pé', 'Agachamento livre', 'Supino reto', 'Desenvolvimento com halteres', 'Abdominal oblíquo', 'Elevação de pernas'],
    ['Stiff', 'Agachamento livre', 'Puxada frontal', 'Elevação lateral', 'Abdominal oblíquo', 'Abdominal máquina'],
    ['Leg press', 'Mesa flexora', 'Desenvolvimento com halteres', 'Tríceps corda', 'Elevação de pernas', 'Abdominal máquina'],
  ],
  "mulher-intermediario-ruim-3-nao": [
    ['Afundo', 'Stiff com mochila', 'Flexão de braço', 'Remada unilateral com mochila', 'Abdominal infra', 'Prancha lateral'],
    ['Agachamento livre', 'Agachamento isométrico', 'Elevação lateral com garrafa', 'Flexão de braço', 'Prancha lateral', 'Abdominal infra'],
    ['Stiff com mochila', 'Agachamento isométrico', 'Flexão de braço', 'Elevação lateral com garrafa', 'Abdominal', 'Canivete'],
  ],
  "mulher-intermediario-ruim-4-sim": [
    ['Leg press', 'Stiff', 'Tríceps corda', 'Elevação lateral', 'Abdominal máquina', 'Abdominal oblíquo'],
    ['Agachamento livre', 'Mesa flexora', 'Desenvolvimento com halteres', 'Tríceps corda', 'Prancha lateral', 'Abdominal máquina'],
    ['Panturrilha em pé', 'Leg press', 'Tríceps corda', 'Elevação lateral', 'Prancha abdominal', 'Abdominal oblíquo'],
    ['Leg press', 'Agachamento livre', 'Desenvolvimento com halteres', 'Rosca direta', 'Abdominal máquina', 'Abdominal oblíquo'],
  ],
  "mulher-intermediario-ruim-4-nao": [
    ['Panturrilha no degrau', 'Agachamento livre', 'Elevação lateral com garrafa', 'Rosca com mochila', 'Canivete', 'Prancha lateral'],
    ['Panturrilha no degrau', 'Stiff com mochila', 'Elevação lateral com garrafa', 'Rosca com mochila', 'Abdominal', 'Abdominal infra'],
    ['Agachamento livre', 'Panturrilha no degrau', 'Elevação lateral com garrafa', 'Flexão de braço', 'Abdominal', 'Abdominal infra'],
    ['Afundo', 'Agachamento isométrico', 'Rosca com mochila', 'Remada unilateral com mochila', 'Abdominal', 'Canivete'],
  ],
  "mulher-intermediario-ruim-5-sim": [
    ['Agachamento livre', 'Panturrilha em pé', 'Elevação lateral', 'Supino reto', 'Abdominal máquina', 'Elevação de pernas'],
    ['Mesa flexora', 'Cadeira extensora', 'Supino reto', 'Desenvolvimento com halteres', 'Prancha lateral', 'Abdominal máquina'],
    ['Mesa flexora', 'Stiff', 'Elevação lateral', 'Desenvolvimento com halteres', 'Abdominal máquina', 'Abdominal oblíquo'],
    ['Stiff', 'Leg press', 'Supino reto', 'Puxada frontal', 'Abdominal máquina', 'Abdominal oblíquo'],
    ['Stiff', 'Leg press', 'Elevação lateral', 'Puxada frontal', 'Prancha lateral', 'Abdominal oblíquo'],
  ],
  "mulher-intermediario-ruim-5-nao": [
    ['Afundo', 'Agachamento livre', 'Tríceps banco', 'Elevação lateral com garrafa', 'Prancha lateral', 'Prancha'],
    ['Stiff com mochila', 'Agachamento livre', 'Rosca com mochila', 'Elevação lateral com garrafa', 'Abdominal infra', 'Prancha lateral'],
    ['Afundo', 'Stiff com mochila', 'Elevação lateral com garrafa', 'Tríceps banco', 'Prancha', 'Prancha lateral'],
    ['Agachamento isométrico', 'Panturrilha no degrau', 'Flexão de braço', 'Elevação lateral com garrafa', 'Prancha', 'Canivete'],
    ['Panturrilha no degrau', 'Agachamento livre', 'Flexão de braço', 'Tríceps banco', 'Abdominal infra', 'Prancha'],
  ],
  "mulher-avancado-boa-2-sim": [
    ['Cadeira extensora', 'Mesa flexora', 'Puxada frontal', 'Rosca direta', 'Prancha lateral', 'Elevação de pernas'],
    ['Leg press', 'Panturrilha em pé', 'Rosca direta', 'Puxada frontal', 'Abdominal máquina', 'Prancha lateral'],
  ],
  "mulher-avancado-boa-2-nao": [
    ['Agachamento isométrico', 'Afundo', 'Flexão de braço', 'Rosca com mochila', 'Prancha', 'Prancha lateral'],
    ['Afundo', 'Stiff com mochila', 'Elevação lateral com garrafa', 'Remada unilateral com mochila', 'Canivete', 'Prancha'],
  ],
  "mulher-avancado-boa-3-sim": [
    ['Mesa flexora', 'Leg press', 'Tríceps corda', 'Rosca direta', 'Abdominal máquina', 'Prancha lateral'],
    ['Leg press', 'Stiff', 'Puxada frontal', 'Supino reto', 'Prancha lateral', 'Abdominal máquina'],
    ['Leg press', 'Cadeira extensora', 'Elevação lateral', 'Rosca direta', 'Prancha lateral', 'Elevação de pernas'],
  ],
  "mulher-avancado-boa-3-nao": [
    ['Stiff com mochila', 'Afundo', 'Flexão de braço', 'Elevação lateral com garrafa', 'Abdominal infra', 'Canivete'],
    ['Agachamento isométrico', 'Panturrilha no degrau', 'Elevação lateral com garrafa', 'Tríceps banco', 'Abdominal', 'Prancha lateral'],
    ['Agachamento isométrico', 'Stiff com mochila', 'Flexão de braço', 'Elevação lateral com garrafa', 'Abdominal infra', 'Prancha lateral'],
  ],
  "mulher-avancado-boa-4-sim": [
    ['Mesa flexora', 'Leg press', 'Elevação lateral', 'Puxada frontal', 'Elevação de pernas', 'Abdominal oblíquo'],
    ['Cadeira extensora', 'Mesa flexora', 'Desenvolvimento com halteres', 'Rosca direta', 'Abdominal máquina', 'Elevação de pernas'],
    ['Stiff', 'Agachamento livre', 'Supino reto', 'Desenvolvimento com halteres', 'Abdominal oblíquo', 'Abdominal máquina'],
    ['Stiff', 'Panturrilha em pé', 'Supino reto', 'Desenvolvimento com halteres', 'Abdominal máquina', 'Prancha abdominal'],
  ],
  "mulher-avancado-boa-4-nao": [
    ['Agachamento isométrico', 'Stiff com mochila', 'Flexão de braço', 'Tríceps banco', 'Abdominal', 'Prancha lateral'],
    ['Agachamento livre', 'Panturrilha no degrau', 'Rosca com mochila', 'Elevação lateral com garrafa', 'Canivete', 'Prancha lateral'],
    ['Stiff com mochila', 'Agachamento livre', 'Flexão de braço', 'Elevação lateral com garrafa', 'Abdominal infra', 'Prancha'],
    ['Agachamento isométrico', 'Afundo', 'Rosca com mochila', 'Elevação lateral com garrafa', 'Canivete', 'Abdominal'],
  ],
  "mulher-avancado-boa-5-sim": [
    ['Mesa flexora', 'Panturrilha em pé', 'Elevação lateral', 'Tríceps corda', 'Prancha abdominal', 'Abdominal máquina'],
    ['Panturrilha em pé', 'Stiff', 'Desenvolvimento com halteres', 'Puxada frontal', 'Abdominal máquina', 'Prancha abdominal'],
    ['Cadeira extensora', 'Agachamento livre', 'Tríceps corda', 'Supino reto', 'Abdominal oblíquo', 'Elevação de pernas'],
    ['Cadeira extensora', 'Panturrilha em pé', 'Tríceps corda', 'Supino reto', 'Elevação de pernas', 'Abdominal máquina'],
    ['Panturrilha em pé', 'Agachamento livre', 'Tríceps corda', 'Rosca direta', 'Abdominal máquina', 'Abdominal oblíquo'],
  ],
  "mulher-avancado-boa-5-nao": [
    ['Agachamento isométrico', 'Agachamento livre', 'Remada unilateral com mochila', 'Flexão de braço', 'Prancha', 'Abdominal infra'],
    ['Agachamento livre', 'Stiff com mochila', 'Tríceps banco', 'Rosca com mochila', 'Canivete', 'Abdominal'],
    ['Agachamento livre', 'Stiff com mochila', 'Elevação lateral com garrafa', 'Flexão de braço', 'Canivete', 'Prancha'],
    ['Afundo', 'Agachamento livre', 'Tríceps banco', 'Elevação lateral com garrafa', 'Abdominal', 'Canivete'],
    ['Stiff com mochila', 'Agachamento isométrico', 'Rosca com mochila', 'Elevação lateral com garrafa', 'Abdominal infra', 'Prancha lateral'],
  ],
  "mulher-avancado-mediana-2-sim": [
    ['Leg press', 'Cadeira extensora', 'Tríceps corda', 'Elevação lateral', 'Abdominal máquina', 'Prancha abdominal'],
    ['Mesa flexora', 'Stiff', 'Tríceps corda', 'Desenvolvimento com halteres', 'Abdominal máquina', 'Prancha abdominal'],
  ],
  "mulher-avancado-mediana-2-nao": [
    ['Agachamento livre', 'Stiff com mochila', 'Elevação lateral com garrafa', 'Remada unilateral com mochila', 'Canivete', 'Abdominal infra'],
    ['Agachamento livre', 'Afundo', 'Tríceps banco', 'Rosca com mochila', 'Prancha', 'Abdominal'],
  ],
  "mulher-avancado-mediana-3-sim": [
    ['Agachamento livre', 'Stiff', 'Elevação lateral', 'Rosca direta', 'Prancha abdominal', 'Prancha lateral'],
    ['Stiff', 'Mesa flexora', 'Puxada frontal', 'Elevação lateral', 'Prancha abdominal', 'Abdominal oblíquo'],
    ['Agachamento livre', 'Leg press', 'Tríceps corda', 'Desenvolvimento com halteres', 'Prancha lateral', 'Abdominal oblíquo'],
  ],
  "mulher-avancado-mediana-3-nao": [
    ['Agachamento livre', 'Stiff com mochila', 'Tríceps banco', 'Flexão de braço', 'Abdominal', 'Prancha'],
    ['Agachamento livre', 'Agachamento isométrico', 'Tríceps banco', 'Elevação lateral com garrafa', 'Abdominal', 'Prancha'],
    ['Agachamento isométrico', 'Afundo', 'Tríceps banco', 'Remada unilateral com mochila', 'Canivete', 'Prancha'],
  ],
  "mulher-avancado-mediana-4-sim": [
    ['Panturrilha em pé', 'Cadeira extensora', 'Supino reto', 'Puxada frontal', 'Prancha abdominal', 'Elevação de pernas'],
    ['Panturrilha em pé', 'Mesa flexora', 'Elevação lateral', 'Puxada frontal', 'Abdominal oblíquo', 'Prancha lateral'],
    ['Mesa flexora', 'Cadeira extensora', 'Desenvolvimento com halteres', 'Supino reto', 'Abdominal máquina', 'Prancha abdominal'],
    ['Agachamento livre', 'Leg press', 'Desenvolvimento com halteres', 'Elevação lateral', 'Abdominal oblíquo', 'Abdominal máquina'],
  ],
  "mulher-avancado-mediana-4-nao": [
    ['Agachamento isométrico', 'Panturrilha no degrau', 'Rosca com mochila', 'Remada unilateral com mochila', 'Canivete', 'Prancha lateral'],
    ['Agachamento livre', 'Afundo', 'Flexão de braço', 'Elevação lateral com garrafa', 'Abdominal', 'Prancha'],
    ['Panturrilha no degrau', 'Agachamento livre', 'Tríceps banco', 'Rosca com mochila', 'Abdominal', 'Prancha lateral'],
    ['Agachamento livre', 'Agachamento isométrico', 'Elevação lateral com garrafa', 'Rosca com mochila', 'Prancha lateral', 'Abdominal'],
  ],
  "mulher-avancado-mediana-5-sim": [
    ['Leg press', 'Cadeira extensora', 'Tríceps corda', 'Elevação lateral', 'Prancha lateral', 'Prancha abdominal'],
    ['Leg press', 'Mesa flexora', 'Desenvolvimento com halteres', 'Rosca direta', 'Abdominal máquina', 'Prancha abdominal'],
    ['Cadeira extensora', 'Stiff', 'Puxada frontal', 'Desenvolvimento com halteres', 'Prancha lateral', 'Prancha abdominal'],
    ['Agachamento livre', 'Stiff', 'Supino reto', 'Puxada frontal', 'Prancha abdominal', 'Elevação de pernas'],
    ['Panturrilha em pé', 'Agachamento livre', 'Tríceps corda', 'Desenvolvimento com halteres', 'Abdominal máquina', 'Abdominal oblíquo'],
  ],
  "mulher-avancado-mediana-5-nao": [
    ['Agachamento livre', 'Panturrilha no degrau', 'Elevação lateral com garrafa', 'Flexão de braço', 'Abdominal infra', 'Prancha lateral'],
    ['Agachamento isométrico', 'Agachamento livre', 'Remada unilateral com mochila', 'Flexão de braço', 'Prancha lateral', 'Abdominal infra'],
    ['Stiff com mochila', 'Agachamento isométrico', 'Rosca com mochila', 'Flexão de braço', 'Abdominal infra', 'Prancha lateral'],
    ['Agachamento isométrico', 'Panturrilha no degrau', 'Flexão de braço', 'Tríceps banco', 'Canivete', 'Abdominal infra'],
    ['Afundo', 'Stiff com mochila', 'Tríceps banco', 'Remada unilateral com mochila', 'Prancha lateral', 'Prancha'],
  ],
  "mulher-avancado-ruim-2-sim": [
    ['Agachamento livre', 'Panturrilha em pé', 'Tríceps corda', 'Rosca direta', 'Abdominal oblíquo', 'Prancha lateral'],
    ['Panturrilha em pé', 'Stiff', 'Tríceps corda', 'Rosca direta', 'Abdominal oblíquo', 'Abdominal máquina'],
  ],
  "mulher-avancado-ruim-2-nao": [
    ['Agachamento livre', 'Agachamento isométrico', 'Rosca com mochila', 'Flexão de braço', 'Abdominal', 'Prancha lateral'],
    ['Agachamento isométrico', 'Panturrilha no degrau', 'Tríceps banco', 'Flexão de braço', 'Canivete', 'Prancha'],
  ],
  "mulher-avancado-ruim-3-sim": [
    ['Stiff', 'Cadeira extensora', 'Puxada frontal', 'Elevação lateral', 'Abdominal oblíquo', 'Prancha abdominal'],
    ['Stiff', 'Mesa flexora', 'Tríceps corda', 'Desenvolvimento com halteres', 'Abdominal máquina', 'Elevação de pernas'],
    ['Leg press', 'Agachamento livre', 'Rosca direta', 'Desenvolvimento com halteres', 'Elevação de pernas', 'Abdominal máquina'],
  ],
  "mulher-avancado-ruim-3-nao": [
    ['Panturrilha no degrau', 'Stiff com mochila', 'Rosca com mochila', 'Tríceps banco', 'Canivete', 'Prancha'],
    ['Agachamento isométrico', 'Agachamento livre', 'Tríceps banco', 'Elevação lateral com garrafa', 'Prancha lateral', 'Prancha'],
    ['Agachamento livre', 'Afundo', 'Remada unilateral com mochila', 'Flexão de braço', 'Canivete', 'Prancha lateral'],
  ],
  "mulher-avancado-ruim-4-sim": [
    ['Cadeira extensora', 'Panturrilha em pé', 'Puxada frontal', 'Desenvolvimento com halteres', 'Abdominal oblíquo', 'Abdominal máquina'],
    ['Cadeira extensora', 'Panturrilha em pé', 'Desenvolvimento com halteres', 'Elevação lateral', 'Prancha abdominal', 'Elevação de pernas'],
    ['Stiff', 'Leg press', 'Desenvolvimento com halteres', 'Rosca direta', 'Prancha abdominal', 'Prancha lateral'],
    ['Leg press', 'Mesa flexora', 'Desenvolvimento com halteres', 'Tríceps corda', 'Elevação de pernas', 'Abdominal máquina'],
  ],
  "mulher-avancado-ruim-4-nao": [
    ['Stiff com mochila', 'Panturrilha no degrau', 'Elevação lateral com garrafa', 'Flexão de braço', 'Abdominal', 'Canivete'],
    ['Panturrilha no degrau', 'Agachamento isométrico', 'Flexão de braço', 'Tríceps banco', 'Prancha lateral', 'Canivete'],
    ['Stiff com mochila', 'Panturrilha no degrau', 'Rosca com mochila', 'Flexão de braço', 'Abdominal', 'Abdominal infra'],
    ['Agachamento livre', 'Stiff com mochila', 'Rosca com mochila', 'Flexão de braço', 'Canivete', 'Prancha'],
  ],
  "mulher-avancado-ruim-5-sim": [
    ['Mesa flexora', 'Cadeira extensora', 'Puxada frontal', 'Tríceps corda', 'Prancha lateral', 'Abdominal oblíquo'],
    ['Stiff', 'Agachamento livre', 'Puxada frontal', 'Desenvolvimento com halteres', 'Prancha lateral', 'Prancha abdominal'],
    ['Mesa flexora', 'Agachamento livre', 'Desenvolvimento com halteres', 'Puxada frontal', 'Abdominal oblíquo', 'Elevação de pernas'],
    ['Panturrilha em pé', 'Mesa flexora', 'Puxada frontal', 'Tríceps corda', 'Abdominal oblíquo', 'Abdominal máquina'],
    ['Panturrilha em pé', 'Cadeira extensora', 'Supino reto', 'Puxada frontal', 'Abdominal oblíquo', 'Prancha lateral'],
  ],
  "mulher-avancado-ruim-5-nao": [
    ['Agachamento livre', 'Agachamento isométrico', 'Remada unilateral com mochila', 'Tríceps banco', 'Prancha lateral', 'Abdominal'],
    ['Stiff com mochila', 'Afundo', 'Elevação lateral com garrafa', 'Remada unilateral com mochila', 'Prancha lateral', 'Canivete'],
    ['Stiff com mochila', 'Agachamento livre', 'Elevação lateral com garrafa', 'Flexão de braço', 'Prancha lateral', 'Abdominal'],
    ['Afundo', 'Agachamento livre', 'Rosca com mochila', 'Elevação lateral com garrafa', 'Canivete', 'Prancha lateral'],
    ['Panturrilha no degrau', 'Agachamento livre', 'Elevação lateral com garrafa', 'Remada unilateral com mochila', 'Abdominal', 'Prancha'],
  ],

  /* 6 dias */

  // Homem - Iniciante - Boa - 6 dias - academia SIM
  "homem-iniciante-boa-6-sim": [
    ['Leg press', 'Panturrilha em pé', 'Supino reto com halteres', 'Elevação lateral', 'Abdominal prancha', 'Abdominal infra'],
    ['Agachamento livre', 'Mesa flexora', 'Puxada frontal', 'Rosca direta com barra', 'Prancha lateral', 'Elevação de pernas'],
    ['Stiff com halteres', 'Remada baixa', 'Desenvolvimento com halteres', 'Tríceps corda', 'Abdominal supra', 'Prancha abdominal'],
    ['Cadeira extensora', 'Panturrilha sentada', 'Supino inclinado', 'Elevação frontal', 'Abdominal oblíquo', 'Abdominal bicicleta'],
    ['Agachamento sumô', 'Mesa flexora', 'Puxada alta', 'Rosca martelo', 'Prancha com elevação de pernas', 'Abdominal infra'],
    ['Leg press unilateral', 'Glúteos na polia', 'Remada unilateral', 'Tríceps banco', 'Abdominal prancha lateral', 'Elevação de quadril']
  ],

  // Homem - Iniciante - Boa - 6 dias - academia NÃO
  "homem-iniciante-boa-6-nao": [
    ['Agachamento peso corporal', 'Elevação de panturrilha no degrau', 'Flexão de braço com joelhos', 'Rosca com elástico', 'Prancha estática', 'Abdominal infra'],
    ['Avanço sem peso', 'Ponte de glúteos', 'Remada invertida com elástico', 'Tríceps testa com elástico', 'Prancha lateral', 'Abdominal bicicleta'],
    ['Agachamento sumô', 'Mesa flexora improvisada', 'Desenvolvimento com elástico', 'Remada baixa com elástico', 'Abdominal prancha', 'Elevação de pernas'],
    ['Agachamento unilateral', 'Flexão de braço tradicional', 'Remada invertida com elástico', 'Elevação lateral com elástico', 'Prancha lateral', 'Abdominal supra'],
    ['Ponte glútea', 'Avanço com apoio', 'Tríceps banco', 'Rosca direta com elástico', 'Prancha abdominal', 'Abdominal oblíquo'],
    ['Agachamento peso corporal', 'Flexão de braço', 'Remada invertida', 'Rosca martelo com elástico', 'Prancha lateral', 'Elevação de pernas']
  ],

  // Homem - Intermediário - Boa - 6 dias - academia SIM
  "homem-intermediario-boa-6-sim": [
    ['Agachamento livre', 'Panturrilha em pé', 'Supino reto barra', 'Elevação lateral', 'Prancha com toque no ombro', 'Abdominal infra'],
    ['Stiff', 'Mesa flexora', 'Puxada frente', 'Rosca direta barra', 'Prancha lateral', 'Elevação de pernas'],
    ['Leg press', 'Glúteos polia baixa', 'Desenvolvimento com halteres', 'Tríceps corda', 'Abdominal supra', 'Prancha abdominal'],
    ['Cadeira extensora', 'Panturrilha sentada', 'Supino inclinado', 'Elevação frontal', 'Abdominal oblíquo', 'Abdominal bicicleta'],
    ['Avanço com barra', 'Mesa flexora', 'Remada unilateral', 'Rosca martelo', 'Prancha com elevação de pernas', 'Abdominal infra'],
    ['Agachamento sumô', 'Glúteos na polia', 'Remada baixa', 'Tríceps testa', 'Abdominal prancha lateral', 'Elevação de quadril']
  ],

  // Homem - Intermediário - Boa - 6 dias - academia NÃO
  "homem-intermediario-boa-6-nao": [
    ['Agachamento peso corporal', 'Elevação de panturrilha no degrau', 'Rosca direta com elástico', 'Desenvolvimento com elástico', 'Prancha abdominal curta', 'Elevação de pernas leve'],
    ['Avanço sem peso', 'Ponte de glúteos', 'Tríceps testa com elástico', 'Flexão de braço leve', 'Prancha lateral curta', 'Abdominal infra leve'],
    ['Agachamento sumô leve', 'Mesa flexora improvisada leve', 'Desenvolvimento com elástico leve', 'Remada baixa com elástico leve', 'Abdominal máquina improvisada leve', 'Elevação de pernas leve'],
    ['Agachamento unilateral leve', 'Flexão de braço com joelhos leve', 'Remada invertida com elástico leve', 'Elevação lateral com elástico leve', 'Prancha lateral curta', 'Abdominal infra leve'],
    ['Ponte glútea leve', 'Avanço com apoio leve', 'Tríceps banco leve', 'Rosca direta elástico leve', 'Prancha abdominal curta', 'Abdominal supra leve'],
    ['Agachamento peso corporal leve', 'Flexão de braço leve', 'Remada invertida leve', 'Rosca martelo com elástico leve', 'Prancha lateral curta', 'Elevação de pernas leve']
  ],

  // Homem - Avançado - Boa - 6 dias - academia SIM
  "homem-avancado-boa-6-sim": [
    ['Agachamento livre pesado', 'Panturrilha em pé com carga', 'Supino reto barra', 'Elevação lateral com halteres', 'Prancha com peso', 'Abdominal infra com carga'],
    ['Stiff com barra', 'Mesa flexora', 'Puxada frente com pegada aberta', 'Rosca direta barra', 'Prancha lateral com peso', 'Elevação de pernas suspenso'],
    ['Leg press unilateral', 'Glúteos polia baixa', 'Desenvolvimento com barra', 'Tríceps corda', 'Abdominal supra com carga', 'Prancha abdominal com peso'],
    ['Cadeira extensora', 'Panturrilha sentada', 'Supino inclinado barra', 'Elevação frontal com halteres', 'Abdominal oblíquo com peso', 'Abdominal bicicleta com carga'],
    ['Avanço com barra e peso', 'Mesa flexora', 'Remada unilateral com barra', 'Rosca martelo barra', 'Prancha com elevação de pernas com peso', 'Abdominal infra com carga'],
    ['Agachamento sumô pesado', 'Glúteos na polia', 'Remada baixa barra', 'Tríceps testa barra', 'Abdominal prancha lateral com peso', 'Elevação de quadril com peso']
  ],

  // Homem - Avançado - Boa - 6 dias - academia NÃO
  "homem-avancado-boa-6-nao": [
    ['Agachamento peso corporal com salto', 'Elevação de panturrilha com carga corporal', 'Rosca direta com elástico forte', 'Desenvolvimento com elástico forte', 'Prancha abdominal longa', 'Elevação de pernas suspenso'],
    ['Avanço sem peso com salto', 'Ponte de glúteos com uma perna', 'Tríceps testa com elástico forte', 'Flexão de braço tradicional com peso', 'Prancha lateral longa', 'Abdominal infra com peso'],
    ['Agachamento sumô com salto', 'Mesa flexora improvisada', 'Desenvolvimento com elástico forte', 'Remada baixa com elástico forte', 'Abdominal máquina improvisada com peso', 'Elevação de pernas suspenso'],
    ['Agachamento unilateral com salto', 'Flexão de braço tradicional', 'Remada invertida com elástico forte', 'Elevação lateral com elástico forte', 'Prancha lateral longa', 'Abdominal infra com peso'],
    ['Ponte glútea com elevação', 'Avanço com apoio', 'Tríceps banco com peso', 'Rosca direta elástico forte', 'Prancha abdominal longa', 'Abdominal supra com peso'],
    ['Agachamento peso corporal', 'Flexão de braço com peso', 'Remada invertida', 'Rosca martelo com elástico forte', 'Prancha lateral longa', 'Elevação de pernas com peso']
  ],

  // Mulher - Iniciante - Boa - 6 dias - academia SIM
  "mulher-iniciante-boa-6-sim": [
    ['Leg press', 'Panturrilha em pé', 'Supino com halteres', 'Elevação lateral', 'Abdominal prancha', 'Abdominal infra'],
    ['Agachamento livre', 'Mesa flexora', 'Puxada frontal', 'Rosca direta com halteres', 'Prancha lateral', 'Elevação de pernas'],
    ['Stiff com halteres', 'Remada baixa', 'Desenvolvimento com halteres', 'Tríceps corda', 'Abdominal supra', 'Prancha abdominal'],
    ['Cadeira extensora', 'Panturrilha sentada', 'Supino inclinado', 'Elevação frontal', 'Abdominal oblíquo', 'Abdominal bicicleta'],
    ['Agachamento sumô', 'Mesa flexora', 'Puxada alta', 'Rosca martelo', 'Prancha com elevação de pernas', 'Abdominal infra'],
    ['Leg press unilateral', 'Glúteos na polia', 'Remada unilateral', 'Tríceps banco', 'Abdominal prancha lateral', 'Elevação de quadril']
  ],

  // Mulher - Iniciante - Boa - 6 dias - academia NÃO
  "mulher-iniciante-boa-6-nao": [
    ['Agachamento peso corporal', 'Elevação de panturrilha no degrau', 'Flexão de braço com joelhos', 'Rosca com elástico', 'Prancha estática', 'Abdominal infra'],
    ['Avanço sem peso', 'Ponte de glúteos', 'Remada invertida com elástico', 'Tríceps testa com elástico', 'Prancha lateral', 'Abdominal bicicleta'],
    ['Agachamento sumô', 'Mesa flexora improvisada', 'Desenvolvimento com elástico', 'Remada baixa com elástico', 'Abdominal prancha', 'Elevação de pernas'],
    ['Agachamento unilateral', 'Flexão de braço tradicional', 'Remada invertida com elástico', 'Elevação lateral com elástico', 'Prancha lateral', 'Abdominal supra'],
    ['Ponte glútea', 'Avanço com apoio', 'Tríceps banco', 'Rosca direta com elástico', 'Prancha abdominal', 'Abdominal oblíquo'],
    ['Agachamento peso corporal', 'Flexão de braço', 'Remada invertida', 'Rosca martelo com elástico', 'Prancha lateral', 'Elevação de pernas']
  ],

  // Mulher - Intermediário - Boa - 6 dias - academia SIM
  "mulher-intermediario-boa-6-sim": [
    ['Agachamento livre', 'Panturrilha em pé', 'Supino reto barra', 'Elevação lateral', 'Prancha com toque no ombro', 'Abdominal infra'],
    ['Stiff', 'Mesa flexora', 'Puxada frente', 'Rosca direta barra', 'Prancha lateral', 'Elevação de pernas'],
    ['Leg press', 'Glúteos polia baixa', 'Desenvolvimento com halteres', 'Tríceps corda', 'Abdominal supra', 'Prancha abdominal'],
    ['Cadeira extensora', 'Panturrilha sentada', 'Supino inclinado', 'Elevação frontal', 'Abdominal oblíquo', 'Abdominal bicicleta'],
    ['Avanço com barra', 'Mesa flexora', 'Remada unilateral', 'Rosca martelo', 'Prancha com elevação de pernas', 'Abdominal infra'],
    ['Agachamento sumô', 'Glúteos na polia', 'Remada baixa', 'Tríceps testa', 'Abdominal prancha lateral', 'Elevação de quadril']
  ],

  // Mulher - Intermediário - Boa - 6 dias - academia NÃO
  "mulher-intermediario-boa-6-nao": [
    ['Agachamento peso corporal', 'Elevação de panturrilha no degrau', 'Rosca direta com elástico', 'Desenvolvimento com elástico', 'Prancha abdominal curta', 'Elevação de pernas leve'],
    ['Avanço sem peso', 'Ponte de glúteos', 'Tríceps testa com elástico', 'Flexão de braço leve', 'Prancha lateral curta', 'Abdominal infra leve'],
    ['Agachamento sumô leve', 'Mesa flexora improvisada leve', 'Desenvolvimento com elástico leve', 'Remada baixa com elástico leve', 'Abdominal máquina improvisada leve', 'Elevação de pernas leve'],
    ['Agachamento unilateral leve', 'Flexão de braço com joelhos leve', 'Remada invertida com elástico leve', 'Elevação lateral com elástico leve', 'Prancha lateral curta', 'Abdominal infra leve'],
    ['Ponte glútea leve', 'Avanço com apoio leve', 'Tríceps banco leve', 'Rosca direta elástico leve', 'Prancha abdominal curta', 'Abdominal supra leve'],
    ['Agachamento peso corporal leve', 'Flexão de braço leve', 'Remada invertida leve', 'Rosca martelo com elástico leve', 'Prancha lateral curta', 'Elevação de pernas leve']
  ],

  // Mulher - Avançado - Boa - 6 dias - academia SIM
  "mulher-avancado-boa-6-sim": [
    ['Agachamento livre pesado', 'Panturrilha em pé com carga', 'Supino reto barra', 'Elevação lateral com halteres', 'Prancha com peso', 'Abdominal infra com carga'],
    ['Stiff com barra', 'Mesa flexora', 'Puxada frente com pegada aberta', 'Rosca direta barra', 'Prancha lateral com peso', 'Elevação de pernas suspenso'],
    ['Leg press unilateral', 'Glúteos polia baixa', 'Desenvolvimento com barra', 'Tríceps corda', 'Abdominal supra com carga', 'Prancha abdominal com peso'],
    ['Cadeira extensora', 'Panturrilha sentada', 'Supino inclinado barra', 'Elevação frontal com halteres', 'Abdominal oblíquo com peso', 'Abdominal bicicleta com carga'],
    ['Avanço com barra e peso', 'Mesa flexora', 'Remada unilateral com barra', 'Rosca martelo barra', 'Prancha com elevação de pernas com peso', 'Abdominal infra com carga'],
    ['Agachamento sumô pesado', 'Glúteos na polia', 'Remada baixa barra', 'Tríceps testa barra', 'Abdominal prancha lateral com peso', 'Elevação de quadril com peso']
  ],

  // Mulher - Avançado - Boa - 6 dias - academia NÃO
  "mulher-avancado-boa-6-nao": [
    ['Agachamento peso corporal com salto', 'Elevação de panturrilha com carga corporal', 'Rosca direta com elástico forte', 'Desenvolvimento com elástico forte', 'Prancha abdominal longa', 'Elevação de pernas suspenso'],
    ['Avanço sem peso com salto', 'Ponte de glúteos com uma perna', 'Tríceps testa com elástico forte', 'Flexão de braço tradicional com peso', 'Prancha lateral longa', 'Abdominal infra com peso'],
    ['Agachamento sumô com salto', 'Mesa flexora improvisada', 'Desenvolvimento com elástico forte', 'Remada baixa com elástico forte', 'Abdominal máquina improvisada com peso', 'Elevação de pernas suspenso'],
    ['Agachamento unilateral com salto', 'Flexão de braço tradicional', 'Remada invertida com elástico forte', 'Elevação lateral com elástico forte', 'Prancha lateral longa', 'Abdominal infra com peso'],
    ['Ponte glútea com elevação', 'Avanço com apoio', 'Tríceps banco com peso', 'Rosca direta elástico forte', 'Prancha abdominal longa', 'Abdominal supra com peso'],
    ['Agachamento peso corporal', 'Flexão de braço com peso', 'Remada invertida', 'Rosca martelo com elástico forte', 'Prancha lateral longa', 'Elevação de pernas com peso']
  ],

  // Agora as combinações para condição mediana e ruim

  // Homem - Iniciante - Mediana - 6 dias - academia SIM
  "homem-iniciante-mediana-6-sim": [
    ['Leg press leve', 'Panturrilha em pé leve', 'Supino reto com halteres leve', 'Elevação lateral leve', 'Abdominal prancha curta', 'Abdominal infra leve'],
    ['Agachamento livre leve', 'Mesa flexora leve', 'Puxada frontal leve', 'Rosca direta com barra leve', 'Prancha lateral curta', 'Elevação de pernas leve'],
    ['Stiff com halteres leve', 'Remada baixa leve', 'Desenvolvimento com halteres leve', 'Tríceps corda leve', 'Abdominal supra leve', 'Prancha abdominal curta'],
    ['Cadeira extensora leve', 'Panturrilha sentada leve', 'Supino inclinado leve', 'Elevação frontal leve', 'Abdominal oblíquo leve', 'Abdominal bicicleta leve'],
    ['Agachamento sumô leve', 'Mesa flexora leve', 'Puxada alta leve', 'Rosca martelo leve', 'Prancha com elevação de pernas leve', 'Abdominal infra leve'],
    ['Leg press unilateral leve', 'Glúteos na polia leve', 'Remada unilateral leve', 'Tríceps banco leve', 'Abdominal prancha lateral leve', 'Elevação de quadril leve']
  ],

  // Homem - Iniciante - Mediana - 6 dias - academia NÃO
  "homem-iniciante-mediana-6-nao": [
    ['Agachamento peso corporal leve', 'Elevação de panturrilha no degrau leve', 'Flexão de braço com joelhos leve', 'Rosca com elástico leve', 'Prancha estática leve', 'Abdominal infra leve'],
    ['Avanço sem peso leve', 'Ponte de glúteos leve', 'Remada invertida com elástico leve', 'Tríceps testa com elástico leve', 'Prancha lateral leve', 'Abdominal bicicleta leve'],
    ['Agachamento sumô leve', 'Mesa flexora improvisada leve', 'Desenvolvimento com elástico leve', 'Remada baixa com elástico leve', 'Abdominal prancha leve', 'Elevação de pernas leve'],
    ['Agachamento unilateral leve', 'Flexão de braço tradicional leve', 'Remada invertida com elástico leve', 'Elevação lateral com elástico leve', 'Prancha lateral leve', 'Abdominal supra leve'],
    ['Ponte glútea leve', 'Avanço com apoio leve', 'Tríceps banco leve', 'Rosca direta com elástico leve', 'Prancha abdominal leve', 'Abdominal oblíquo leve'],
    ['Agachamento peso corporal leve', 'Flexão de braço leve', 'Remada invertida leve', 'Rosca martelo com elástico leve', 'Prancha lateral leve', 'Elevação de pernas leve']
  ],

  // Homem - Intermediário - Mediana - 6 dias - academia SIM
  "homem-intermediario-mediana-6-sim": [
    ['Agachamento livre leve', 'Panturrilha em pé leve', 'Supino reto barra leve', 'Elevação lateral leve', 'Prancha com toque no ombro leve', 'Abdominal infra leve'],
    ['Stiff leve', 'Mesa flexora leve', 'Puxada frente leve', 'Rosca direta barra leve', 'Prancha lateral leve', 'Elevação de pernas leve'],
    ['Leg press leve', 'Glúteos polia baixa leve', 'Desenvolvimento com halteres leve', 'Tríceps corda leve', 'Abdominal supra leve', 'Prancha abdominal leve'],
    ['Cadeira extensora leve', 'Panturrilha sentada leve', 'Supino inclinado leve', 'Elevação frontal leve', 'Abdominal oblíquo leve', 'Abdominal bicicleta leve'],
    ['Avanço com barra leve', 'Mesa flexora leve', 'Remada unilateral leve', 'Rosca martelo leve', 'Prancha com elevação de pernas leve', 'Abdominal infra leve'],
    ['Agachamento sumô leve', 'Glúteos na polia leve', 'Remada baixa leve', 'Tríceps testa leve', 'Abdominal prancha lateral leve', 'Elevação de quadril leve']
  ],

  // Homem - Intermediário - Mediana - 6 dias - academia NÃO
  "homem-intermediario-mediana-6-nao": [
    ['Agachamento peso corporal leve', 'Elevação de panturrilha no degrau leve', 'Rosca direta com elástico leve', 'Desenvolvimento com elástico leve', 'Prancha abdominal curta leve', 'Elevação de pernas leve'],
    ['Avanço sem peso leve', 'Ponte de glúteos leve', 'Tríceps testa com elástico leve', 'Flexão de braço leve', 'Prancha lateral curta leve', 'Abdominal infra leve'],
    ['Agachamento sumô leve', 'Mesa flexora improvisada leve', 'Desenvolvimento com elástico leve', 'Remada baixa com elástico leve', 'Abdominal máquina improvisada leve', 'Elevação de pernas leve'],
    ['Agachamento unilateral leve', 'Flexão de braço com joelhos leve', 'Remada invertida com elástico leve', 'Elevação lateral com elástico leve', 'Prancha lateral curta leve', 'Abdominal infra leve'],
    ['Ponte glútea leve', 'Avanço com apoio leve', 'Tríceps banco leve', 'Rosca direta elástico leve', 'Prancha abdominal leve', 'Abdominal supra leve'],
    ['Agachamento peso corporal leve', 'Flexão de braço leve', 'Remada invertida leve', 'Rosca martelo com elástico leve', 'Prancha lateral curta leve', 'Elevação de pernas leve']
  ],

  // Homem - Avançado - Mediana - 6 dias - academia SIM
  "homem-avancado-mediana-6-sim": [
    ['Agachamento livre moderado', 'Panturrilha em pé moderado', 'Supino reto barra moderado', 'Elevação lateral moderado', 'Prancha com peso moderado', 'Abdominal infra moderado'],
    ['Stiff moderado', 'Mesa flexora moderado', 'Puxada frente moderado', 'Rosca direta barra moderado', 'Prancha lateral moderado', 'Elevação de pernas moderado'],
    ['Leg press moderado', 'Glúteos polia baixa moderado', 'Desenvolvimento com halteres moderado', 'Tríceps corda moderado', 'Abdominal supra moderado', 'Prancha abdominal moderado'],
    ['Cadeira extensora moderado', 'Panturrilha sentada moderado', 'Supino inclinado moderado', 'Elevação frontal moderado', 'Abdominal oblíquo moderado', 'Abdominal bicicleta moderado'],
    ['Avanço com barra moderado', 'Mesa flexora moderado', 'Remada unilateral moderado', 'Rosca martelo moderado', 'Prancha com elevação de pernas moderado', 'Abdominal infra moderado'],
    ['Agachamento sumô moderado', 'Glúteos na polia moderado', 'Remada baixa moderado', 'Tríceps testa moderado', 'Abdominal prancha lateral moderado', 'Elevação de quadril moderado']
  ],

  // Homem - Avançado - Mediana - 6 dias - academia NÃO
  "homem-avancado-mediana-6-nao": [
    ['Agachamento peso corporal moderado', 'Elevação de panturrilha no degrau moderado', 'Rosca direta com elástico moderado', 'Desenvolvimento com elástico moderado', 'Prancha abdominal longa moderado', 'Elevação de pernas moderado'],
    ['Avanço sem peso moderado', 'Ponte de glúteos moderado', 'Tríceps testa com elástico moderado', 'Flexão de braço moderado', 'Prancha lateral longa moderado', 'Abdominal infra moderado'],
    ['Agachamento sumô moderado', 'Mesa flexora improvisada moderado', 'Desenvolvimento com elástico moderado', 'Remada baixa com elástico moderado', 'Abdominal máquina improvisada moderado', 'Elevação de pernas moderado'],
    ['Agachamento unilateral moderado', 'Flexão de braço tradicional moderado', 'Remada invertida com elástico moderado', 'Elevação lateral com elástico moderado', 'Prancha lateral longa moderado', 'Abdominal infra moderado'],
    ['Ponte glútea moderado', 'Avanço com apoio moderado', 'Tríceps banco moderado', 'Rosca direta elástico moderado', 'Prancha abdominal moderado', 'Abdominal supra moderado'],
    ['Agachamento peso corporal moderado', 'Flexão de braço moderado', 'Remada invertida moderado', 'Rosca martelo com elástico moderado', 'Prancha lateral longa moderado', 'Elevação de pernas moderado']
  ],

  // Mulher - Iniciante - Mediana - 6 dias - academia SIM
  "mulher-iniciante-mediana-6-sim": [
    ['Leg press leve', 'Panturrilha em pé leve', 'Supino com halteres leve', 'Elevação lateral leve', 'Abdominal prancha curta', 'Abdominal infra leve'],
    ['Agachamento livre leve', 'Mesa flexora leve', 'Puxada frontal leve', 'Rosca direta com halteres leve', 'Prancha lateral curta', 'Elevação de pernas leve'],
    ['Stiff com halteres leve', 'Remada baixa leve', 'Desenvolvimento com halteres leve', 'Tríceps corda leve', 'Abdominal supra leve', 'Prancha abdominal curta'],
    ['Cadeira extensora leve', 'Panturrilha sentada leve', 'Supino inclinado leve', 'Elevação frontal leve', 'Abdominal oblíquo leve', 'Abdominal bicicleta leve'],
    ['Agachamento sumô leve', 'Mesa flexora leve', 'Puxada alta leve', 'Rosca martelo leve', 'Prancha com elevação de pernas leve', 'Abdominal infra leve'],
    ['Leg press unilateral leve', 'Glúteos na polia leve', 'Remada unilateral leve', 'Tríceps banco leve', 'Abdominal prancha lateral leve', 'Elevação de quadril leve']
  ],

  // Mulher - Iniciante - Mediana - 6 dias - academia NÃO
  "mulher-iniciante-mediana-6-nao": [
    ['Agachamento peso corporal leve', 'Elevação de panturrilha no degrau leve', 'Flexão de braço com joelhos leve', 'Rosca com elástico leve', 'Prancha estática leve', 'Abdominal infra leve'],
    ['Avanço sem peso leve', 'Ponte de glúteos leve', 'Remada invertida com elástico leve', 'Tríceps testa com elástico leve', 'Prancha lateral leve', 'Abdominal bicicleta leve'],
    ['Agachamento sumô leve', 'Mesa flexora improvisada leve', 'Desenvolvimento com elástico leve', 'Remada baixa com elástico leve', 'Abdominal prancha leve', 'Elevação de pernas leve'],
    ['Agachamento unilateral leve', 'Flexão de braço tradicional leve', 'Remada invertida com elástico leve', 'Elevação lateral com elástico leve', 'Prancha lateral leve', 'Abdominal supra leve'],
    ['Ponte glútea leve', 'Avanço com apoio leve', 'Tríceps banco leve', 'Rosca direta com elástico leve', 'Prancha abdominal leve', 'Abdominal oblíquo leve'],
    ['Agachamento peso corporal leve', 'Flexão de braço leve', 'Remada invertida leve', 'Rosca martelo com elástico leve', 'Prancha lateral leve', 'Elevação de pernas leve']
  ],

  // Mulher - Intermediário - Mediana - 6 dias - academia SIM
  "mulher-intermediario-mediana-6-sim": [
    ['Agachamento livre leve', 'Panturrilha em pé leve', 'Supino reto barra leve', 'Elevação lateral leve', 'Prancha com toque no ombro leve', 'Abdominal infra leve'],
    ['Stiff leve', 'Mesa flexora leve', 'Puxada frente leve', 'Rosca direta barra leve', 'Prancha lateral leve', 'Elevação de pernas leve'],
    ['Leg press leve', 'Glúteos polia baixa leve', 'Desenvolvimento com halteres leve', 'Tríceps corda leve', 'Abdominal supra leve', 'Prancha abdominal leve'],
    ['Cadeira extensora leve', 'Panturrilha sentada leve', 'Supino inclinado leve', 'Elevação frontal leve', 'Abdominal oblíquo leve', 'Abdominal bicicleta leve'],
    ['Avanço com barra leve', 'Mesa flexora leve', 'Remada unilateral leve', 'Rosca martelo leve', 'Prancha com elevação de pernas leve', 'Abdominal infra leve'],
    ['Agachamento sumô leve', 'Glúteos na polia leve', 'Remada baixa leve', 'Tríceps testa leve', 'Abdominal prancha lateral leve', 'Elevação de quadril leve']
  ],

  // Mulher - Intermediário - Mediana - 6 dias - academia NÃO
  "mulher-intermediario-mediana-6-nao": [
    ['Agachamento peso corporal leve', 'Elevação de panturrilha no degrau leve', 'Rosca direta com elástico leve', 'Desenvolvimento com elástico leve', 'Prancha abdominal curta leve', 'Elevação de pernas leve'],
    ['Avanço sem peso leve', 'Ponte de glúteos leve', 'Tríceps testa com elástico leve', 'Flexão de braço leve', 'Prancha lateral curta leve', 'Abdominal infra leve'],
    ['Agachamento sumô leve', 'Mesa flexora improvisada leve', 'Desenvolvimento com elástico leve', 'Remada baixa com elástico leve', 'Abdominal máquina improvisada leve', 'Elevação de pernas leve'],
    ['Agachamento unilateral leve', 'Flexão de braço com joelhos leve', 'Remada invertida com elástico leve', 'Elevação lateral com elástico leve', 'Prancha lateral curta leve', 'Abdominal infra leve'],
    ['Ponte glútea leve', 'Avanço com apoio leve', 'Tríceps banco leve', 'Rosca direta elástico leve', 'Prancha abdominal leve', 'Abdominal supra leve'],
    ['Agachamento peso corporal leve', 'Flexão de braço leve', 'Remada invertida leve', 'Rosca martelo com elástico leve', 'Prancha lateral curta leve', 'Elevação de pernas leve']
  ],

  // Mulher - Avançado - Mediana - 6 dias - academia SIM
  "mulher-avancado-mediana-6-sim": [
    ['Agachamento livre moderado', 'Panturrilha em pé moderado', 'Supino reto barra moderado', 'Elevação lateral moderado', 'Prancha com peso moderado', 'Abdominal infra moderado'],
    ['Stiff moderado', 'Mesa flexora moderado', 'Puxada frente moderado', 'Rosca direta barra moderado', 'Prancha lateral moderado', 'Elevação de pernas moderado'],
    ['Leg press moderado', 'Glúteos polia baixa moderado', 'Desenvolvimento com halteres moderado', 'Tríceps corda moderado', 'Abdominal supra moderado', 'Prancha abdominal moderado'],
    ['Cadeira extensora moderado', 'Panturrilha sentada moderado', 'Supino inclinado moderado', 'Elevação frontal moderado', 'Abdominal oblíquo moderado', 'Abdominal bicicleta moderado'],
    ['Avanço com barra moderado', 'Mesa flexora moderado', 'Remada unilateral moderado', 'Rosca martelo moderado', 'Prancha com elevação de pernas moderado', 'Abdominal infra moderado'],
    ['Agachamento sumô moderado', 'Glúteos na polia moderado', 'Remada baixa moderado', 'Tríceps testa moderado', 'Abdominal prancha lateral moderado', 'Elevação de quadril moderado']
  ],

  // Mulher - Avançado - Mediana - 6 dias - academia NÃO
  "mulher-avancado-mediana-6-nao": [
    ['Agachamento peso corporal moderado', 'Elevação de panturrilha no degrau moderado', 'Rosca direta com elástico moderado', 'Desenvolvimento com elástico moderado', 'Prancha abdominal longa moderado', 'Elevação de pernas moderado'],
    ['Avanço sem peso moderado', 'Ponte de glúteos moderado', 'Tríceps testa com elástico moderado', 'Flexão de braço moderado', 'Prancha lateral longa moderado', 'Abdominal infra moderado'],
    ['Agachamento sumô moderado', 'Mesa flexora improvisada moderado', 'Desenvolvimento com elástico moderado', 'Remada baixa com elástico moderado', 'Abdominal máquina improvisada moderado', 'Elevação de pernas moderado'],
    ['Agachamento unilateral moderado', 'Flexão de braço tradicional moderado', 'Remada invertida com elástico moderado', 'Elevação lateral com elástico moderado', 'Prancha lateral longa moderado', 'Abdominal infra moderado'],
    ['Ponte glútea moderado', 'Avanço com apoio moderado', 'Tríceps banco moderado', 'Rosca direta elástico moderado', 'Prancha abdominal moderado', 'Abdominal supra moderado'],
    ['Agachamento peso corporal moderado', 'Flexão de braço moderado', 'Remada invertida moderado', 'Rosca martelo com elástico moderado', 'Prancha lateral longa moderado', 'Elevação de pernas moderado']
  ],

  "homem-avancado-ruim-6-nao": [
    ["Alongamento", "Agachamento isométrico", "Tríceps banco", "Remada unilateral com mochila", "Prancha", "Abdominal"],
    ["Stiff com mochila", "Afundo", "Rosca com mochila", "Elevação lateral com garrafa", "Canivete", "Abdominal infra"],
    ["Agachamento isométrico", "Flexão de braço", "Remada unilateral com mochila", "Tríceps banco", "Abdominal", "Prancha lateral"],
    ["Panturrilha no degrau", "Agachamento livre", "Rosca com mochila", "Elevação lateral com garrafa", "Prancha lateral", "Abdominal"],
    ["Stiff com mochila", "Panturrilha no degrau", "Tríceps banco", "Flexão de braço", "Abdominal infra", "Canivete"],
    ["Afundo", "Stiff com mochila", "Flexão de braço", "Rosca com mochila", "Abdominal", "Prancha"]
  ],
  "homem-avancado-ruim-6-sim": [
    ["Alongamento", "Agachamento isométrico", "Tríceps banco", "Remada unilateral com mochila", "Prancha", "Abdominal"],
    ["Stiff com mochila", "Afundo", "Rosca com mochila", "Elevação lateral com garrafa", "Canivete", "Abdominal infra"],
    ["Agachamento isométrico", "Flexão de braço", "Remada unilateral com mochila", "Tríceps banco", "Abdominal", "Prancha lateral"],
    ["Panturrilha no degrau", "Agachamento livre", "Rosca com mochila", "Elevação lateral com garrafa", "Prancha lateral", "Abdominal"],
    ["Stiff com mochila", "Panturrilha no degrau", "Tríceps banco", "Flexão de braço", "Abdominal infra", "Canivete"],
    ["Afundo", "Stiff com mochila", "Flexão de braço", "Rosca com mochila", "Abdominal", "Prancha"]
  ],
};

const descricoesExercicios = {
  "Leg press": "Sente-se na máquina de leg press, posicione os pés na plataforma na largura dos ombros, empurre a plataforma estendendo as pernas sem travar os joelhos e volte controladamente à posição inicial.",
  "Panturrilha em pé": "Fique em pé na máquina ou com halteres, suba na ponta dos pés elevando os calcanhares, contraia as panturrilhas e desça lentamente até a posição inicial.",
  "Desenvolvimento com halteres": "Sentado ou em pé, segure um haltere em cada mão na altura dos ombros, empurre os halteres para cima até estender os braços, e retorne lentamente.",
  "Elevação lateral": "Com halteres nas mãos ao lado do corpo, eleve os braços lateralmente até a altura dos ombros e retorne controladamente.",
  "Abdominal oblíquo": "Deite-se de lado, com o corpo alinhado, eleve o tronco e a parte superior das pernas, contraindo os músculos oblíquos.",
  "Abdominal máquina": "Sente-se na máquina de abdominal, segure as alças, contraia o abdômen para flexionar o tronco e retorne lentamente.",
  "Cadeira extensora": "Sentado na máquina, posicione os pés sob o apoio, estenda as pernas até a completa extensão dos joelhos e volte controladamente.",
  "Agachamento livre": "Com barra nas costas, agache flexionando os joelhos e quadris até que as coxas fiquem paralelas ao chão, mantendo o tronco ereto, e volte à posição inicial.",
  "Supino reto": "Deitado no banco reto, segure a barra com as mãos na largura dos ombros, abaixe a barra controladamente até o peito e empurre para cima até estender os braços.",
  "Tríceps corda": "Na polia alta com corda, puxe a corda para baixo estendendo os braços e contraindo o tríceps, retornando lentamente.",
  "Prancha lateral": "Deite-se de lado apoiando o antebraço no chão, mantenha o corpo alinhado e eleve o quadril, sustentando a posição.",
  "Desenvolvimento com barra": "Segure a barra na altura dos ombros, empurre-a para cima até estender os braços e retorne controladamente.",
  "Rosca direta": "Com barra ou halteres, flexione os cotovelos elevando o peso até a altura dos ombros e retorne lentamente.",
  "Remada curvada": "Com barra, flexione o tronco para frente, puxe a barra em direção ao abdômen contraindo as costas e volte controladamente.",
  "Puxada frontal": "Na polia alta, puxe a barra até a altura do peito, contraindo as costas e retornando devagar.",
};

const linksYoutube = {
    "Agachamento livre": "https://www.youtube.com/watch?v=1xMaFs0L3ao",
    "Leg press": "https://www.youtube.com/watch?v=IZxyjW7MPJQ",
    "Supino reto": "https://www.youtube.com/watch?v=rT7DgCr-3pg",
    "Rosca direta": "https://www.youtube.com/watch?v=kwG2ipFRgfo",
    "Elevação lateral": "https://www.youtube.com/watch?v=kDqklk1ZESo",
    "Panturrilha em pé": "https://www.youtube.com/watch?v=-M4-G8p8fmc",
    "Tríceps corda": "https://www.youtube.com/watch?v=vB5OHsJ3EME",
    "Stiff": "https://www.youtube.com/watch?v=3B2CAVOe3Fg",
    "Desenvolvimento com halteres": "https://www.youtube.com/watch?v=B-aVuyhvLHU",
    "Abdominal máquina": "https://www.youtube.com/watch?v=vPKXFarXbys",
    "Abdominal oblíquo": "https://www.youtube.com/watch?v=OSiN1iwu3A4",
    "Prancha": "https://www.youtube.com/watch?v=pSHjTRCQxIw",
    "Prancha lateral": "https://www.youtube.com/watch?v=K2VljzCC16g"
  };